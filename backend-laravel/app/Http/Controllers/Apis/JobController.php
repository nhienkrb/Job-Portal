<?php

namespace App\Http\Controllers\Apis;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\JobRequest;
use App\Services\JobService;
use Illuminate\Http\Request;

class JobController extends Controller
{
    protected $jobService;
    public function __construct(JobService $jobService)
    {
        $this->jobService = $jobService;
    }

    // GET: Lấy tất cả job (ai cũng truy cập được)
    public function index(Request $request)
    {
        $jobs = $this->jobService->getAllJobByFiled($request);
        return ApiResponse::success($jobs);
    }

    // GET: Lấy job theo id (ai cũng truy cập được)
    public function show($id)
    {
        $job = $this->jobService->getJobById($id);
        if (!$job) return ApiResponse::notFound("Job not found");
        return ApiResponse::success($job);
    }

    // POST: Tạo job (chỉ admin)
    public function store(JobRequest $request)
    {
        $job = $this->jobService->createJob($request->validated());
        return ApiResponse::success($job, "Job created", 201);
    }

    // PUT: Cập nhật job (chỉ admin)
    public function update(JobRequest $request, $id)
    {
        $job = $this->jobService->updateJob($id, $request->validated());
        if (!$job) return ApiResponse::notFound("Job not found or update failed");
        return ApiResponse::success($job, "Job updated");
    }

    // DELETE: Xóa job (chỉ admin)
    public function destroy($id)
    {
        $deleted = $this->jobService->deleteJob($id);
        if (!$deleted) return ApiResponse::notFound("Job not found or delete failed");
        return ApiResponse::success(null, "Job deleted");
    }
}
