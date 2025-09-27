<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = "users";
    protected $fillable = [
        'email',
        'password',
        'role',
        'is_verified',
        'verify_token'
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
     * Get the identifier that will be stored in the subject claim of the JWT.
     */

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     */
    public function getJWTCustomClaims()
    {
        return [
            'role' => $this->role,
            'is_verified' => $this->is_verified,
            'email' => $this->email,
        ];
    }

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
