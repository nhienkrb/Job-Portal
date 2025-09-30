<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{
    public function getAll()
    {
        return Category::with('children')->get();
    }

    public function getAllByName()
    {
        return Category::select("id", "name", "slug")->get();
    }

    public function getById($id)
    {
        return Category::with('children')->find($id);
    }

    public function countJobsByCategory()
    {
        return Category::select('id', 'name','slug')
            ->withCount('jobs') // thêm cột jobs_count
            ->orderBy('jobs_count', 'desc') // sắp xếp theo số lượng jobs
            ->limit(12)
            ->get(); // lấy id, tên category và số job
    }


    public function create(array $data)
    {
        return Category::create($data);
    }

    public function update($id, array $data)
    {
        $category = Category::find($id);
        if (!$category) return null;
        $category->update($data);
        return $category;
    }

    public function delete($id)
    {
        $category = Category::find($id);
        if (!$category) return false;
        return $category->delete();
    }
}
