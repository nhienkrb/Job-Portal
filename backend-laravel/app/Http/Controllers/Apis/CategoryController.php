<?php

namespace App\Http\Controllers\Apis;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CategoryRequest;
use App\Services\CategoryService;

class CategoryController extends Controller
{
    protected $categoryService;
    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    // GET: Lấy tất cả category (ai cũng truy cập được)
    public function index()
    {
        return ApiResponse::success($this->categoryService->getAllCategories());
    }

    public function categoryAllByName()
    {
        return ApiResponse::success($this->categoryService->getAllCategoriesByName());
    }

    public function countJobsAllByCategory()
    {
        return ApiResponse::success($this->categoryService->getCountJobsByCategory());
    }

    // GET: Lấy category theo id (ai cũng truy cập được)
    public function show($id)
    {
        $category = $this->categoryService->getCategoryById($id);
        if (!$category) return ApiResponse::notFound("Category not found");
        return ApiResponse::success($category);
    }

    // POST: Tạo category (chỉ admin)
    public function store(CategoryRequest $request)
    {
        $category = $this->categoryService->createCategory($request->validated());
        return ApiResponse::success($category, "Category created", 201);
    }

    // PUT: Cập nhật category (chỉ admin)
    public function update(CategoryRequest $request, $id)
    {
        $category = $this->categoryService->updateCategory($id, $request->validated());
        if (!$category) return ApiResponse::notFound("Category not found or update failed");
        return ApiResponse::success($category, "Category updated");
    }

    // DELETE: Xóa category (chỉ admin)
    public function destroy($id)
    {
        $deleted = $this->categoryService->deleteCategory($id);
        if (!$deleted) return ApiResponse::notFound("Category not found or delete failed");
        return ApiResponse::success(null, "Category deleted");
    }
}
