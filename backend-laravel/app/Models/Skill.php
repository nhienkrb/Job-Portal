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
        return $this->belongsToMany(Profile::class, 'candidate_skills')
                    ->withPivot('experience_years')
                    ->withTimestamps();
    }

    public function jobs()
    {
        return $this->belongsToMany(Job::class, 'job_skills');
    }
}