<?php

namespace App\Http\Controllers\Apis;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\LoginRequest;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected $authService;

    public function __construct(AuthService $_authService)
    {
        $this->authService = $_authService;
        $this->middleware('auth:api', [
            'except' => ['loginApi', 'registerApi', 'verifyToken']
        ]);
    }

    public function loginApi(LoginRequest $request)
    {
        $user = $this->authService->LoginService($request->validated());
        if (!$user) return ApiResponse::notFound("User not found or incorrect password");
        if (!Auth::user()->is_verified) {
            return ApiResponse::unauthorized("Account not verified. Please check your email.");
        }
        // Nếu dùng JWT, trả về token ở đây
        return ApiResponse::success($user, "Login successful");
    }

    public function verifyToken($token)
    {
        return $this->authService->verify($token);
    }

    public function registerApi(RegisterRequest $request)
    {
        $user = $this->authService->registerService($request->validated());
        if (!$user) return ApiResponse::error("Register failed");
        return ApiResponse::success($user, "Registration successful. Please check your email to verify your account.");
    }

    public function me()
    {
        $user = Auth::user();
        if (!$user) {
            return ApiResponse::notFound("User not found");
        }
        return ApiResponse::success([
            'id' => $user->id,
            'name' => $user->name ?? '',
            'email' => $user->email,
            'role' => $user->role,
            'is_verified' => $user->is_verified,
            'created_at' => $user->created_at,
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return ApiResponse::success(null, "Successfully logged out");
    }
}
