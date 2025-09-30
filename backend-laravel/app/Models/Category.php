<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    protected $table = "categories";
    protected $fillable = [
        'name',
        'parent_id',
        'description',
        'slug'
    ];
    public $timestamps = false; 

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function jobs()
    {
        return $this->hasMany(Job::class);
    }
    // Lấy tất cả descendants (con, cháu, chắt...)
    public function descendants()
    {
        return $this->children()->with('descendants');
    }

    // Lấy tất cả ancestors (cha, ông, cụ...)
    public function ancestors()
    {
        return $this->parent()->with('ancestors');
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function($category){
            $category->slug = Str::slug($category->name);

        });
          static::updating(function ($category) {
            $category->slug = Str::slug($category->name);
        });
    }
}
