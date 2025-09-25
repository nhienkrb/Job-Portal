<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavedJob extends Model
{
    use HasFactory;
protected $table = "saved_jobs";
    protected $fillable = [
        'candidate_id',
        'job_id',
    ];

    protected $casts = [
        'saved_at' => 'datetime',
    ];

    public function candidate()
    {
        return $this->belongsTo(User::class, 'candidate_id');
    }

    public function job()
    {
        return $this->belongsTo(Job::class);
    }
}
