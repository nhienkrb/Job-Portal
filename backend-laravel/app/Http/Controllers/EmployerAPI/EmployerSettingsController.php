<?php

namespace App\Http\Controllers\EmployerAPI;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class EmployerSettingsController extends Controller
{
    // Cập nhật email (profile)
    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            'email' => 'required|email|unique:users,email,' . $user->id,
        ]);
        $user->email = $request->email;
        $user->save();

        return response()->json(['message' => 'Cập nhật email thành công', 'data' => $user]);
    }

    // Đổi mật khẩu
    public function updatePassword(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6',
        ]);
        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Mật khẩu hiện tại không đúng'], 422);
        }
        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json(['message' => 'Đổi mật khẩu thành công']);
    }

    // Cập nhật thông báo
    public function updateNotifications(Request $request)
    {
        $user = Auth::user();
        $user->notification_settings = json_encode($request->all());
        $user->save();

        return response()->json(['message' => 'Cập nhật thông báo thành công']);
    }

    // Cập nhật quyền riêng tư
    public function updatePrivacy(Request $request)
    {
        $user = Auth::user();
        $user->privacy_settings = json_encode($request->all());
        $user->save();

        return response()->json(['message' => 'Cập nhật quyền riêng tư thành công']);
    }

  public function showProfile(Request $request)
{
    $user = Auth::user()->load('profile');
    $company = Company::where('employer_id', $user->id)->first();

    return response()->json([
        'data' => [
            'id' => $user->id,
            'email' => $user->email,
            'role' => $user->role,
            'profile' => $user->profile,
            'company_name' => $company ? $company->name : null,
            // Có thể trả về thêm các trường khác nếu cần
        ]
    ]);
}
}
