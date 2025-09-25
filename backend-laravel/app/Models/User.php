<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = "users";
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'is_verified',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];
     /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_verified' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
      public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function company()
    {
        return $this->hasOne(Company::class, 'employer_id');
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'candidate_id');
    }

    public function savedJobs()
    {
        return $this->hasMany(SavedJob::class, 'candidate_id');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }
}
