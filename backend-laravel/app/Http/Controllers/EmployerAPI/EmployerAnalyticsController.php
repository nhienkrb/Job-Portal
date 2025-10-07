<?php

namespace App\Http\Controllers\EmployerAPI;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Job;
use App\Models\JobApplication;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployerAnalyticsController extends Controller
{
  public function index(Request $request)
    {
        $employerId = Auth::id();
        $company = Company::where('employer_id', $employerId)->firstOrFail();

        $days = (int) $request->input('days', 30);
        $fromDate = Carbon::now()->subDays($days);

        // Tổng quan
        $totalJobs = Job::where('company_id', $company->id)->count();
        $activeJobs = Job::where('company_id', $company->id)->where('is_active', true)->count();
        $totalApplications = JobApplication::whereHas('job', function ($q) use ($company) {
            $q->where('company_id', $company->id);
        })->count();
        $totalViews = Job::where('company_id', $company->id)->sum('views');
        $conversionRate = $totalViews > 0 ? round($totalApplications / $totalViews * 100, 2) : 0;

        // Thống kê việc làm theo ngày
        $jobStats = Job::where('company_id', $company->id)
            ->where('created_at', '>=', $fromDate)
            ->selectRaw('DATE(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Thống kê ứng tuyển theo ngày
        $applicationStats = JobApplication::whereHas('job', function ($q) use ($company) {
                $q->where('company_id', $company->id);
            })
            ->where('applied_at', '>=', $fromDate)
            ->selectRaw('DATE(applied_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        // Top jobs (việc làm hiệu quả nhất)
        $topJobs = Job::where('company_id', $company->id)
            ->withCount('jobApplications')
            ->orderByDesc('job_applications_count')
            ->orderByDesc('views')
            ->take(5)
            ->get()
            ->map(function ($job) {
                $conversion = $job->views > 0 ? round($job->job_applications_count / $job->views * 100, 2) : 0;
                return [
                    'id' => $job->id,
                    'title' => $job->title,
                    'location' => $job->location ?? '',
                    'applications_count' => $job->job_applications_count,
                    'views_count' => $job->views,
                    'conversion_rate' => $conversion,
                ];
            });

        // Thống kê hàng tháng (4 tháng gần nhất)
        $monthlyStats = [];
        for ($i = 3; $i >= 0; $i--) {
            $month = Carbon::now()->subMonths($i)->format('Y-m');
            $jobsCount = Job::where('company_id', $company->id)
                ->whereRaw("DATE_FORMAT(created_at, '%Y-%m') = ?", [$month])
                ->count();
            $applicationsCount = JobApplication::whereHas('job', function ($q) use ($company, $month) {
                    $q->where('company_id', $company->id)
                      ->whereRaw("DATE_FORMAT(applied_at, '%Y-%m') = ?", [$month]);
                })->count();
            // Tính % thay đổi so với tháng trước
            $prevMonth = Carbon::now()->subMonths($i+1)->format('Y-m');
            $prevApplicationsCount = JobApplication::whereHas('job', function ($q) use ($company, $prevMonth) {
                    $q->where('company_id', $company->id)
                      ->whereRaw("DATE_FORMAT(applied_at, '%Y-%m') = ?", [$prevMonth]);
                })->count();
            $change = $prevApplicationsCount > 0 ? round((($applicationsCount - $prevApplicationsCount) / $prevApplicationsCount) * 100, 2) : 0;

            $monthlyStats[] = [
                'label' => Carbon::now()->subMonths($i)->format('m/Y'),
                'value' => $applicationsCount,
                'change' => $change
            ];
        }

        return response()->json([
            'data' => [
                'overview' => [
                    'totalJobs' => $totalJobs,
                    'activeJobs' => $activeJobs,
                    'totalApplications' => $totalApplications,
                    'totalViews' => $totalViews,
                    'conversionRate' => $conversionRate
                ],
                'jobStats' => $jobStats,
                'applicationStats' => $applicationStats,
                'topJobs' => $topJobs,
                'monthlyStats' => $monthlyStats
            ]
        ]);
    }
} 