<?php

namespace App\Http\Requests\Api\Auth;

use App\Http\Requests\Api\BaseApiRequest;

class RegisterRequest extends BaseApiRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|string|max:20|unique:profiles,phone',
            'password' => 'required|min:3',
            'full_name' => 'required|string|max:255',
        ];
    }

    public function messages(): array
    {
        return [
            'full_name.required' => 'Họ tên là bắt buộc',
            'email.required' => 'Email là bắt buộc',
            'email.unique' => 'Email đã tồn tại',
            'password.min' => 'Mật khẩu phải có ít nhất 8 ký tự',
        ];
    }

    public function attributes(): array
    {
        return [
            'full_name' => 'họ tên',
            'email' => 'địa chỉ email',
            'password' => 'mật khẩu',
            'phone' => 'điện thoại',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'email' => strtolower(trim($this->email)),
            'full_name' => trim($this->full_name),
        ]);
    }
}
