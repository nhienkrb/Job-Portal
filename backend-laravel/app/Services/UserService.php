<?php

namespace App\Services;

use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;

class UserService
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getAllUsers()
    {
        return $this->userRepository->getAll();
    }

    public function getUserById($id)
    {
        return $this->userRepository->find($id);
    }

    public function createUser(array $data)
    {
        $data['password'] = Hash::make($data['password']);
        return $this->userRepository->create($data);
    }

    public function updateUser($id, array $data)
    {
        if (isset($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }
        return $this->userRepository->update($id, $data);
    }

    public function deleteUser($id)
    {
        return $this->userRepository->delete($id);
    }

    public function getUsersByRole($role)
    {
        return $this->userRepository->getUsersByRole($role);
    }

    public function verifyUser($id)
    {
        return $this->userRepository->verifyUser($id);
    }

    public function searchUsers($searchTerm)
    {
        return $this->userRepository->searchUsers($searchTerm);
    }

    public function getCandidatesWithProfiles()
    {
        return $this->userRepository->getCandidatesWithProfiles();
    }

    public function getEmployersWithCompanies()
    {
        return $this->userRepository->getEmployersWithCompanies();
    }

    public function getUserStats()
    {
        $totalUsers = $this->userRepository->getAll()->count();
        $verifiedUsers = $this->userRepository->getVerifiedUsers()->count();
        $candidates = $this->userRepository->getUsersByRole('candidate')->count();
        $employers = $this->userRepository->getUsersByRole('employer')->count();

        return [
            'total_users' => $totalUsers,
            'verified_users' => $verifiedUsers,
            'candidates' => $candidates,
            'employers' => $employers,
            'unverified_users' => $totalUsers - $verifiedUsers
        ];
    }

    public function getUserWithProfileAndStats($id)
    {
        $user = $this->userRepository->find($id);
        
        if (!$user) {
            return null;
        }

        // Load profile with skills
        $user->load(['profile.skills']);
        
        // Get job statistics
        $jobCount = 0;
        $jobSave = 0;
        
        if ($user->profile) {
            $jobCount = $user->profile->jobApplications()->count();
            $jobSave = $user->profile->savedJobs()->count();
        }

        // Format the response
        $response = [
            'id' => $user->id,
            'email' => $user->email,
            'role' => $user->role,
            'is_verified' => $user->is_verified,
            'verify_token' => $user->verify_token,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at,
        ];

        if ($user->profile) {
            $response['profile'] = [
                'id' => $user->profile->id,
                'user_id' => $user->profile->user_id,
                'full_name' => $user->profile->full_name,
                'phone' => $user->profile->phone,
                'address' => $user->profile->address,
                'avatar' => $user->profile->avatar,
                'date_of_birth' => $user->profile->date_of_birth,
                'gender' => $user->profile->gender,
                'introduction' => $user->profile->introduction,
                'cv_url' => $user->profile->cv_url,
                'education_level' => $user->profile->education_level,
                'created_at' => $user->profile->created_at,
                'updated_at' => $user->profile->updated_at,
                'isLookingFor' => $user->profile->isLookingFor,
                'skills' => $user->profile->skills->map(function ($skill) {
                    return [
                        'id' => $skill->id,
                        'name' => $skill->name,
                        'pivot' => [
                            'candidate_id' => $skill->pivot->candidate_id,
                            'skill_id' => $skill->pivot->skill_id,
                            'experience_years' => $skill->pivot->experience_years
                        ]
                    ];
                })
            ];
        }

        // Add job statistics
        $response['job_count'] = $jobCount;
        $response['job_save'] = $jobSave;

        return $response;
    }

    public function updateProfile($userId, array $data)
    {
        $user = $this->userRepository->find($userId);
        
        if (!$user || !$user->profile) {
            return null;
        }

        // Update profile data
        $profileData = [
            'full_name' => $data['full_name'] ?? $user->profile->full_name,
            'education_level' => $data['education_level'] ?? $user->profile->education_level,
            'isLookingFor' => $data['isLookingFor'] ?? $user->profile->isLookingFor,
            'date_of_birth' => $data['date_of_birth'] ?? $user->profile->date_of_birth,
            'gender' => $data['gender'] ?? $user->profile->gender,
        ];

        $user->profile->update($profileData);
        
        // Return updated user with profile
        return $this->getUserWithProfileAndStats($userId);
    }
}