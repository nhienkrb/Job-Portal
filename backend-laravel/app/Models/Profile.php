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

    public function skills()
    {
        return $this->belongsToMany(Skill::class, 'candidate_skills')
            ->withPivot('experience_years')
            ->withTimestamps();
    }
}
