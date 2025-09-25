<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $table = "jobs";
    protected $fillable = [
        'company_id',
        'title',
        'description',
        'requirements',
        'benefits',
        'location',
        'min_salary',
        'max_salary',
        'employment_type',
        'level',
        'experience',
        'category_id',
        'expires_at',
        'is_active',
        'views',
    ];

    protected $casts = [
        'min_salary' => 'decimal:3',
        'max_salary' => 'decimal:3',
        'expires_at' => 'date',
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'job_skills');
    }

    public function applications()
    {
        return $this->hasMany(JobApplication::class);
    }

    public function savedByUsers()
    {
        return $this->belongsToMany(User::class, 'saved_jobs', 'job_id', 'candidate_id');
    }
}
