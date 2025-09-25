<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CandidateSkill extends Model
{
    use HasFactory;
protected $table = "candidate_skills";
    protected $fillable = [
        'candidate_id',
        'skill_id',
        'experience_years',
    ];

    public function candidate()
    {
        return $this->belongsTo(Profile::class, 'candidate_id');
    }

    public function skill()
    {
        return $this->belongsTo(Skill::class);
    }
}
