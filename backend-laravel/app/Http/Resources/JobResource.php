<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title'       => $this->title,
            'company'    => ['name' => $this->company->name, 'banner_company_url' => $this->company->logo],
            'min_salary'          => $this->min_salary,
            'max_salary'          => $this->max_salary,
            'location'        => $this->location,
            'employment_type' => $this->employment_type,
            'level'           => $this->level,
            'created_at'      => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
