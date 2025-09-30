<?php

namespace App\Http\Requests\Api;

use App\Enums\EmploymentTypeEnum;
use App\Enums\LevelEnum;

class JobRequest extends BaseApiRequest
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
            'company_id' => 'required|integer|exists:companies,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'requirements' => 'nullable|string',
            'benefits' => 'nullable|string',
            'location' => 'required|string|max:255',
            'min_salary' => 'nullable|numeric|min:0',
            'max_salary' => 'nullable|numeric|min:0|gt:min_salary',
            'employment_type' => 'nullable|string|max:50',
            'level' => 'nullable|string|max:50',
            'experience' => 'nullable|string|max:50',
            'category_id' => 'nullable|integer|exists:categories,id',
            'expires_at' => 'nullable|date|after:today',
            'is_active' => 'boolean',
        ];
    }

    /**
     * Custom validation messages
     */
    public function messages(): array
    {
        return [
            'company_id.required' => 'Công ty là bắt buộc',
            'company_id.exists' => 'Công ty không tồn tại',
            'title.required' => 'Tiêu đề công việc là bắt buộc',
            'title.max' => 'Tiêu đề không được vượt quá 255 ký tự',
            'description.required' => 'Mô tả công việc là bắt buộc',
            'location.required' => 'Địa điểm làm việc là bắt buộc',
            'location.max' => 'Địa điểm không được vượt quá 255 ký tự',
            'min_salary.numeric' => 'Lương tối thiểu phải là số',
            'min_salary.min' => 'Lương tối thiểu không được âm',
            'max_salary.numeric' => 'Lương tối đa phải là số',
            'max_salary.min' => 'Lương tối đa không được âm',
            'max_salary.gt' => 'Lương tối đa phải lớn hơn lương tối thiểu',
            'employment_type.max' => 'Loại hình việc làm không được vượt quá 50 ký tự',
            'level.max' => 'Cấp bậc không được vượt quá 50 ký tự',
            'experience.max' => 'Kinh nghiệm không được vượt quá 50 ký tự',
            'category_id.exists' => 'Danh mục không tồn tại',
            'expires_at.date' => 'Ngày hết hạn không hợp lệ',
            'expires_at.after' => 'Ngày hết hạn phải sau ngày hiện tại',
            'is_active.boolean' => 'Trạng thái hoạt động không hợp lệ',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     */
    public function attributes(): array
    {
        return [
            'company_id' => 'công ty',
            'title' => 'tiêu đề công việc',
            'description' => 'mô tả công việc',
            'requirements' => 'yêu cầu công việc',
            'benefits' => 'phúc lợi',
            'location' => 'địa điểm làm việc',
            'min_salary' => 'lương tối thiểu',
            'max_salary' => 'lương tối đa',
            'employment_type' => 'nullable|string|in:' . implode(',', EmploymentTypeEnum::values()),
            'level' => 'nullable|string|in:' . implode(',', LevelEnum::values()),
            'experience' => 'kinh nghiệm',
            'category_id' => 'danh mục',
            'expires_at' => 'ngày hết hạn',
            'is_active' => 'trạng thái hoạt động',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        // Chuẩn hóa dữ liệu trước khi validation
        $this->merge([
            'title' => trim($this->title),
            'description' => trim($this->description),
            'requirements' => $this->requirements ? trim($this->requirements) : null,
            'benefits' => $this->benefits ? trim($this->benefits) : null,
            'location' => trim($this->location),
            'employment_type' => $this->employment_type ? trim($this->employment_type) : null,
            'level' => $this->level ? trim($this->level) : null,
            'experience' => $this->experience ? trim($this->experience) : null,
            'min_salary' => $this->min_salary ? (float) $this->min_salary : null,
            'max_salary' => $this->max_salary ? (float) $this->max_salary : null,
            'is_active' => $this->boolean('is_active'),
        ]);
    }
}
