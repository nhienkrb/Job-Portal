<?php
// app/Repositories/UserRepository.php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Log;

class UserRepository
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function getAll()
    {
        return $this->user->latest()->get();
    }

    public function find($id)
    {
        return  $this->user->with(['profile','profile.skills'])->findOrFail($id);
    }

    public function findByEmail($email)
    {
        return $this->user->where('email', $email)->first();
    }

    public function create(array $data)
    {
        return $this->user->create($data);
    }

    public function update($id, array $data)
    {
        $user = $this->find($id);
        $user->update($data);
        return $user;
    }

    public function delete($id)
    {
        $user = $this->find($id);
        return $user->delete();
    }

    public function getUsersByRole($role)
    {
        return $this->user->where('role', $role)->latest()->get();
    }

    public function getVerifiedUsers()
    {
        return $this->user->where('is_verified', true)->latest()->get();
    }

    public function getUnverifiedUsers()
    {
        return $this->user->where('is_verified', false)->latest()->get();
    }

    public function searchUsers($searchTerm)
    {
        return $this->user->where('email', 'like', "%{$searchTerm}%")
            ->orWhereHas('profile', function ($query) use ($searchTerm) {
                $query->where('full_name', 'like', "%{$searchTerm}%");
            })
            ->latest()
            ->get();
    }

    public function getUsersWithProfile()
    {
        return $this->user->with('profile')->latest()->get();
    }

    public function getEmployersWithCompanies()
    {
        return $this->user->where('role', 'employer')
            ->with(['company', 'company.industry'])
            ->latest()
            ->get();
    }

    public function getCandidatesWithProfiles()
    {
        return $this->user->where('role', 'candidate')
            ->with(['profile', 'profile.skills'])
            ->latest()
            ->get();
    }

    public function paginate($perPage = 15)
    {
        return $this->user->latest()->paginate($perPage);
    }

    public function getUsersByRolePaginated($role, $perPage = 15)
    {
        return $this->user->where('role', $role)->latest()->paginate($perPage);
    }

    public function verifyUser($id)
    {
        $user = $this->find($id);
        $user->update(['is_verified' => true]);
        return $user;
    }

    public function unverifyUser($id)
    {
        $user = $this->find($id);
        $user->update(['is_verified' => false]);
        return $user;
    }

    public function getUsersWithStats()
    {
        return $this->user->withCount([
            'jobApplications',
            'savedJobs',
            'notifications'
        ])->latest()->get();
    }

    public function getRecentUsers($days = 7)
    {
        return $this->user->where('created_at', '>=', now()->subDays($days))
            ->latest()
            ->get();
    }
}
