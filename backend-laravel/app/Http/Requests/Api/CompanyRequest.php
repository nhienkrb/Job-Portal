<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->role === 'employer';
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'industries_id' => 'nullable|exists:industries,id',
            'description' => 'nullable|string',
            'address' => 'nullable|string',
            'website' => 'nullable|url',
            'size' => 'nullable|in:1-50,51-200,201-500,501-1000,1000+',
        ];
    }
}