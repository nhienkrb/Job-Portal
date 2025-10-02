<?php

namespace App\Http\Controllers\Apis;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\JobRequest;
use App\Http\Resources\JobResource;
use App\Models\Job;
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


    public function filter(Request $request)
    {

        $query = Job::query()->with(['company', 'category']);

        // Filter theo category_id
        if ($request->has('name')) {
            $query->whereHas('company', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->company_name . '%');
            });
        }

        // Filter theo employment_type
        if ($request->has('type')) {
            $query->where('employment_type', $request->type);
        }

        if ($request->has('position')) {
            $query->where('position', $request->position);
        }

        // Filter theo education_level
        if ($request->has('education')) {
            $query->where('education', $request->education);
        }
        // Filter theo kinh nghiệm (ví dụ exp=1-2)
        if ($request->has('exp')) {
            [$minExp, $maxExp] = explode('-', $request->exp);
            $query->whereBetween('experience', [(int) $minExp, (int) $maxExp]);
        }

        // Filter theo mức lương (salary=5000000-7000000)
        if ($request->has('salary')) {
            [$minSalary, $maxSalary] = explode('-', $request->salary);
            $query->where(function ($q) use ($minSalary, $maxSalary) {
                $q->whereBetween('min_salary', [$minSalary, $maxSalary])
                    ->orWhereBetween('max_salary', [$minSalary, $maxSalary]);
            });
        }

        // Lọc theo "mới đăng" (ví dụ: last_days=7 => trong 7 ngày gần đây)
        if ($request->has('last_days')) {
            $query->where('created_at', '>=', now()->subDays($request->last_days));
        }

        // Sort
        if ($request->has('sort')) {
            switch ($request->sort) {
                case 'created':
                    $query->orderBy('created_at', 'desc');
                    break;
                case 'salary':
                    $query->orderBy('max_salary', 'desc');
                    break;
                case 'exp':
                    $query->orderBy('experience', 'asc');
                    break;
                default:
                    $query->orderBy('created_at', 'desc');
            }
        } else {
            $query->orderBy('created_at', 'desc');
        }
        if ($request->has('page')) {
            // Có page => phân trang
            $perPage = $request->get('per_page', 10);
            $jobs = $query->paginate($perPage);
        } else {
            // Không có page => trả hết
            $jobs = $query->get();
        }

        return JobResource::collection($jobs);
    }
}
