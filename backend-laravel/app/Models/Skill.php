<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;
    
    protected $table = "skills";
    protected $fillable = [
        'name',
    ];

    public function candidates()
    {
        return $this->belongsToMany(Profile::class, 'candidate_skills', 'skill_id', 'candidate_id')
                    ->withPivot('experience_years')
                    ->withTimestamps();
    }

    public function jobs()
    {
        return $this->belongsToMany(Job::class, 'job_skills', 'skill_id', 'job_id');
    }

    // Relationship to access pivot model directly
    public function candidateSkills()
    {
        return $this->hasMany(CandidateSkill::class, 'skill_id');
    }

    public function jobSkills()
    {
        return $this->hasMany(JobSkill::class, 'skill_id');
    }
}