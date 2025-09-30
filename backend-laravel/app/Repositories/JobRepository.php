<?php

namespace App\Repositories;

use App\Models\Job;
use Illuminate\Http\Request;

class JobRepository
{
    public function getAllByFiled(Request $request)
    {
        $perPage = 9; // Số items mỗi trang
        $page = $request->get('page', 1); // Lấy page từ query parameter, mặc định là 1

        $jobs = Job::with(['company', 'category', 'skills'])
            ->paginate($perPage, ['*'], 'page', $page);

        // Transform dữ liệu
        $jobs->getCollection()->transform(function ($job) {
            return [
                'id' => $job->id,
                'title' => $job->title,
                'experience' => $job->experience,
                'location' => $job->location,
                'max_salary' => $job->max_salary,
                'level' => $job->level,
                'employment_type' => $job->employment_type,
                "created_at" => $job->created_at,
                'company' => [
                    'name' => $job->company->name,
                    'banner_company_url' => $job->company->banner_company_url
                ],
                // Nếu muốn trả về category hoặc skills thì mở comment bên dưới
                // 'category' => $job->category ? [
                //     'name' => $job->category->name
                // ] : null,
                // 'skills' => $job->skills->map(function ($skill) {
                //     return [
                //         'name' => $skill->name
                //     ];
                // })
            ];
        });

        return $jobs;
    }

    public function getAll()
    {
        return Job::with(['company', 'category', 'skills'])->get();
    }
    public function getById($id)
    {
        return Job::with(['company', 'category', 'skills'])->find($id);
    }

    public function create(array $data)
    {
        return Job::create($data);
    }

    public function update($id, array $data)
    {
        $job = Job::find($id);
        if (!$job) return null;
        $job->update($data);
        return $job;
    }

    public function delete($id)
    {
        $job = Job::find($id);
        if (!$job) return false;
        return $job->delete();
    }
}
