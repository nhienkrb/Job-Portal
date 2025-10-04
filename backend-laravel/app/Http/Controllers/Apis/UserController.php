<?php

namespace App\Http\Controllers\Apis;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    protected $userService;
    public function __construct(UserService $user_service)
    {
        $this->userService = $user_service;
    }


    public function show()
    {
        $user = Auth::user();
        $userDetail = $this->userService->getUserById($user->id);
        if (!$user) return ApiResponse::notFound("User not found");
        return ApiResponse::success($userDetail);
    }

    public function update(Request $request, string $id)
    {
        $data = $request->all();
        $user = $this->userService->updateUser($id, $data);
        if (!$user) return ApiResponse::notFound("User not found or update failed");
        return ApiResponse::success($user, "User updated successfully");
    }

    public function destroy(string $id)
    {
        $deleted = $this->userService->deleteUser($id);
        if (!$deleted) return ApiResponse::notFound("User not found or delete failed");
        return ApiResponse::success(null, "User deleted successfully");
    }

    public function search(Request $request)
    {
        $term = $request->input('q');
        $users = $this->userService->searchUsers($term);
        return ApiResponse::success($users);
    }

    public function getByRole($role)
    {
        $users = $this->userService->getUsersByRole($role);
        return ApiResponse::success($users);
    }

    public function stats()
    {
        $stats = $this->userService->getUserStats();
        return ApiResponse::success($stats);
    }

    public function candidatesWithProfiles()
    {   
        $data = $this->userService->getCandidatesWithProfiles();
        return ApiResponse::success($data);
    }

    public function employersWithCompanies()
    {
        $data = $this->userService->getEmployersWithCompanies();
        return ApiResponse::success($data);
    }

    public function verify($id)
    {
        $user = $this->userService->verifyUser($id);
        if (!$user) return ApiResponse::notFound("User not found or verify failed");
        return ApiResponse::success($user, "User verified successfully");
    }

    public function getUserWithProfileAndStats()
    {
        $user = Auth::user();
        if (!$user) {
            return ApiResponse::notFound("User not found");
        }

        $userDetail = $this->userService->getUserWithProfileAndStats($user->id);
        return ApiResponse::success($userDetail);
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return ApiResponse::notFound("User not found");
        }

        $data = $request->all();
        $updatedProfile = $this->userService->updateProfile($user->id, $data);
        
        if (!$updatedProfile) {
            return ApiResponse::error("Failed to update profile");
        }

        return ApiResponse::success($updatedProfile, "Profile updated successfully");
    }
}
