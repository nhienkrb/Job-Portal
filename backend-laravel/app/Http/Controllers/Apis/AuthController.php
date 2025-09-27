<?php

namespace App\Http\Controllers\Apis;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\LoginRequest;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    protected $authService;

    public function __construct(AuthService $_authService)
    {
        $this->authService = $_authService;
        $this->middleware('auth:api', ['except' => ['loginApi', 'registerApi', 'verifyToken']]);
    }

    public function loginApi(LoginRequest $request)
    {
        $user = $this->authService->LoginService($request->validated());
        if (!$user) return ApiResponse::notFound("User not found or Incorrect Password");
        if (!Auth::user()->is_verified) return   Auth::logout();
        ApiResponse::unauthorized("Account not verified. Please check your email.");
        return ApiResponse::success($user, "Login successful");
    }

    public function verifyToken($token)
    {
        return  $this->authService->verify($token);
    }


    public function registerApi(RegisterRequest  $request)
    {
        $token = $this->authService->RegisterService($request->validated());
        return ApiResponse::success($token, "Registration successful. Please check your email to verify your account.");
    }

    public function me()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
                'is_verified' => $user->is_verified,
                'created_at' => $user->created_at,
            ]
        ]);
    }

    /**
     * Đăng xuất
     */
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out'
        ]);
    }
}
