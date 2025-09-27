<?php
// app/Services/UserService.php

namespace App\Services;

use App\Mail\VerifyAccountMail;
use App\Models\Profile;
use App\Models\User;
use App\Services\EmailService;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class AuthService
{

    protected $user, $profile, $emailService;

    public function __construct(User $_user, Profile $_profile, EmailService $_emailService)
    {
        $this->user = $_user;
        $this->profile = $_profile;
        $this->emailService = $_emailService;
    }

    public function LoginService(array $data)
    {

        if (!$token = JWTAuth::attempt($data)) {
            return null;
        }
        return $this->createAuthResponse($token);
    }

    protected function createAuthResponse(string $token): array
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ];
    }

    public function registerService(array $data)
    {
        return DB::transaction(function () use ($data) {
            try {
                // Tạo user
                $data['verify_token'] = Str::random(64);
                $user = $this->user->create([
                    'password' => Hash::make($data['password']),

                ]);

                // Tạo profile (nếu có dữ liệu profile kèm theo)
                $this->profile->create([
                    'user_id' => $user->id,
                    'full_name' => $data['full_name'] ?? null,
                    'phone'  => $data['phone'] ?? null,
                ]);
                $this->emailService->send($user->email, new VerifyAccountMail($user));
                DB::commit();
                return $user;
            } catch (\Throwable $th) {
                //throw $th;
                new Exception($th->getMessage(), 1);
                DB::rollBack();
            }
        });
    }

    public function verify($token)
    {
        $user = User::where('verify_token', $token)->first();

        if (!$user) {
            return response()->json(['message' => 'Token không hợp lệ'], 400);
        }

        $user->update([
            'is_verified' => true,
            'verify_token' => null,
        ]);

        return response()->json(['message' => 'Xác thực tài khoản thành công']);
    }


}
