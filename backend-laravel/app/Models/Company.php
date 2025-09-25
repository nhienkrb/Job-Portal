<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $table = "companies";
    protected $fillable = [
        'employer_id',
        'industries_id',
        'name',
        'logo',
        'description',
        'address',
        'website',
        'size',
        'banner_company_url',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function employer()
    {
        return $this->belongsTo(User::class, 'employer_id');
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industries_id');
    }

    public function jobs()
    {
        return $this->hasMany(Job::class);
    }
}
