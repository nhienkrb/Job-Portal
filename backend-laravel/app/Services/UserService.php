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
}