<?php

namespace App\Services;

use App\Repositories\JobRepository;

class JobService
{
    protected $jobRepository;

    public function __construct(JobRepository $jobRepository)
    {
        $this->jobRepository = $jobRepository;
    }

    public function getAllJobs()
    {
        return $this->jobRepository->getAll();
    }

    public function getAllJobByFiled($request)
    {
        return $this->jobRepository->getAllByFiled($request);
    }

    public function getJobById($id)
    {
        return $this->jobRepository->getById($id);
    }

    public function createJob(array $data)
    {
        return $this->jobRepository->create($data);
    }

    public function updateJob($id, array $data)
    {
        return $this->jobRepository->update($id, $data);
    }

    public function deleteJob($id)
    {
        return $this->jobRepository->delete($id);
    }
}
