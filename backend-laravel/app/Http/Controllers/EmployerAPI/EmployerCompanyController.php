<?php

namespace App\Http\Controllers\EmployerAPI;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Job;
use App\Models\JobApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class EmployerCompanyController extends Controller
{
   // Lấy thông tin công ty của employer
    public function show(Request $request)
    {
        $employerId = Auth::id();
        $company = Company::with('industry')->where('employer_id', $employerId)->first();

        return response()->json([
            'data' => $company
        ]);
    }

    // Tạo hoặc cập nhật thông tin công ty
    public function store(Request $request)
    {
        $employerId = Auth::id();
        $company = Company::firstOrNew(['employer_id' => $employerId]);

        $company->name = $request->input('name');
        $company->description = $request->input('description');
        $company->address = $request->input('address');
        $company->phone = $request->input('phone');
        $company->email = $request->input('email');
        $company->website = $request->input('website');
        $company->size = $request->input('size');
        $company->founded_year = $request->input('founded_year');
        $company->industries_id = $request->input('industry_id');

        // Xử lý upload logo
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $path = $file->store('logos', 'public');
            $company->logo = Storage::url($path);
        }

        $company->save();

        return response()->json([
            'data' => $company
        ]);
    }

    // Thống kê công ty
    public function stats(Request $request)
    {
        $employerId = Auth::id();
        $company = Company::where('employer_id', $employerId)->firstOrFail();

        $totalJobs = Job::where('company_id', $company->id)->count();
        $activeJobs = Job::where('company_id', $company->id)->where('is_active', true)->count();
        $totalApplications = JobApplication::whereHas('job', function ($q) use ($company) {
            $q->where('company_id', $company->id);
        })->count();
        $totalViews = Job::where('company_id', $company->id)->sum('views');

        return response()->json([
            'data' => [
                'totalJobs' => $totalJobs,
                'activeJobs' => $activeJobs,
                'totalApplications' => $totalApplications,
                'totalViews' => $totalViews,
            ]
        ]);
    }
}