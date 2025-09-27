<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $table = "profiles";
    protected $fillable = [
        'user_id',
        'full_name',
        'phone',
        'address',
        'avatar',
        'date_of_birth',
        'gender',
        'introduction',
        'cv_url',
        'education_level',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

   // Fix this relationship
    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'candidate_skills', 'candidate_id', 'skill_id')
                    ->withPivot('experience_years');
    }

    // Add this relationship to access the pivot model directly
    public function candidateSkills()
    {
        return $this->hasMany(CandidateSkill::class, 'candidate_id');
    }

    // Relationship with job applications
    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'candidate_id');
    }

    // Relationship with saved jobs
    public function savedJobs()
    {
        return $this->hasMany(SavedJob::class, 'candidate_id');
    }
}