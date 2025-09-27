<?php


namespace App\Http\Requests\Api;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UserRequest extends BaseApiRequest
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
        $rules = [
            'address' => 'required|string',
            'avt' => 'required|string|max:255',
        ];

        return $rules;
    }

    /**
     * Custom validation messages
     */
    public function messages(): array
    {
        return [
            'address.required' => 'Tên là bắt buộc',
            'avt.required' => 'Email là bắt buộc',
        ];
    }

    /**
     * Custom failed validation response for API
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'message' => 'Validation errors',
            'errors' => $validator->errors()
        ], 422));
    }
    /**
     * Get custom attributes for validator errors.
     */
    public function attributes(): array
    {
        return [
            'address' => 'họ tên',
            'avt' => 'địa chỉ email',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        // Chuẩn hóa dữ liệu trước khi validation
        $this->merge([
            'address' => strtolower(trim($this->email)),
            'address' => trim($this->name),
        ]);
    }
}
