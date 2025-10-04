<?php

namespace App\Http\Controllers\Apis;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\Request;

class AdminController extends Controller
{
      protected $userService;
    public function __construct(UserService $user_service)
    {
        $this->userService = $user_service;
        $this->middleware('auth:api');
        // Không cần kiểm tra role ở đây, đã kiểm tra ở middleware route
    }

     public function index()
    {
        return ApiResponse::success($this->userService->getAllUsers());
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $user = $this->userService->createUser($data);
        return ApiResponse::success($user, "User created successfully", 201);
    }

    public function show(string $id)
    {
        $user = $this->userService->getUserById($id);
        if (!$user) return ApiResponse::notFound("User not found");
        return ApiResponse::success($user);
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
}
