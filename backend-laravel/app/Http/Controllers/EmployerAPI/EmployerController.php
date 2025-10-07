<?php

namespace App\Http\Controllers\EmployerAPI;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;
use App\Models\JobApplication;
use App\Models\Company;
use Illuminate\Support\Facades\Auth;

class EmployerController extends Controller
{
    public function dashboard(Request $request)
    {
        $employerId = Auth::user()->id;
        $company = Company::where('employer_id', $employerId)->first();

        // Tổng việc làm
        $totalJobs = Job::where('company_id', $company->id)->count();

        // Việc làm đang hoạt động
        $activeJobs = Job::where('company_id', $company->id)->where('is_active', true)->count();

        // Tổng ứng viên (số lượng ứng viên đã ứng tuyển vào việc làm của employer)
        $totalCandidates = JobApplication::whereHas('job', function ($q) use ($company) {
            $q->where('company_id', $company->id);
        })->distinct('candidate_id')->count('candidate_id');


        // Lượt xem hồ sơ (giả sử trường 'views' trong bảng jobs)
        $totalViews = Job::where('company_id', $company->id)->sum('views');

        // Việc làm gần đây
        $recentJobs = Job::where('company_id', $company->id)
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->with('category')
            ->get();

        // Ứng viên ứng tuyển gần đây
        $recentApplications = JobApplication::whereHas('job', function ($q) use ($company) {
            $q->where('company_id', $company->id);
        })
            ->orderBy('applied_at', 'desc')
            ->take(5)
            ->with(['candidate.profile', 'job'])
            ->get();

        return response()->json([
            "data" => [
                "totalJobs" => $totalJobs,
                "activeJobs" => $activeJobs,
                "totalCandidates" => $totalCandidates,
                "totalViews" => $totalViews,
                "recentJobs" => $recentJobs,
                "recentApplications" => $recentApplications,
                "company" => $company,
                "user" => $request->user(),
            ]

        ]);
    }
    public function index(Request $request)
    {
        $employerId = Auth::id();
        $company = Company::where('employer_id', $employerId)->firstOrFail();

        $query = Job::where('company_id', $company->id)
            ->with(['category'])
            ->withCount('jobApplications');

        // Search
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Status filter
        if ($request->filled('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Pagination
        $perPage = 10;
        $jobs = $query->orderBy('created_at', 'desc')->paginate($perPage);

        // Đổi tên trường cho frontend
        $jobs->getCollection()->transform(function ($job) {
            $job->applications_count = $job->job_applications_count ?? 0;
            return $job;
        });

        return response()->json([
            'data' => $jobs->items(),
            'meta' => [
                'current_page' => $jobs->currentPage(),
                'last_page' => $jobs->lastPage(),
                'total' => $jobs->total(),
            ]
        ]);
    }

    public function destroy($id)
    {
        $employerId = Auth::id();
        $company = Company::where('employer_id', $employerId)->firstOrFail();
        $job = Job::where('company_id', $company->id)->findOrFail($id);

        $job->delete();

        return response()->json(['message' => 'Xóa việc làm thành công']);
    }
}
