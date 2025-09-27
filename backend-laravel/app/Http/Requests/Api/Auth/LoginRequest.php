<?php

namespace App\Http\Requests\Api\Auth;

use App\Http\Requests\Api\BaseApiRequest;

class LoginRequest extends BaseApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:3',
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Email là bắt buộc',
            'password.min' => 'Mật khẩu phải có ít nhất 8 ký tự',
        ];
    }

    public function attributes(): array
    {
        return [
            'email' => 'địa chỉ email',
            'password' => 'mật khẩu',
        ];
    }
}
