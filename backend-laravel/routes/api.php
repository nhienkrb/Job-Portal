<?php

use App\Http\Controllers\Apis\AdminController;
use App\Http\Controllers\Apis\AuthController;
use App\Http\Controllers\Apis\CategoryController;
use App\Http\Controllers\Apis\CompanyController;
use App\Http\Controllers\Apis\JobController;
use App\Http\Controllers\Apis\UserController;
use App\Http\Controllers\EmployerAPI\EmployerAnalyticsController;
use App\Http\Controllers\EmployerAPI\EmployerCandidateController;
use App\Http\Controllers\EmployerAPI\EmployerCompanyController;
use App\Http\Controllers\EmployerAPI\EmployerController;
use App\Http\Controllers\EmployerAPI\EmployerSettingsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1/auth')->group(function () {
    Route::post('login', [AuthController::class, 'loginApi'])->name('auth.loginApi');
    Route::post('register', [AuthController::class, 'registerApi'])->name('auth.register');
    Route::get('verify/{token}', [AuthController::class, 'verifyToken'])->name('auth.verify');
    Route::post('logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::get('me', [AuthController::class, 'me'])->name('auth.me');
});

// admin routes
Route::prefix('v1/admin/user')->middleware(['auth:api', 'role:admin'])->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.getAll');
    Route::post('/', [AdminController::class, 'store'])->name('admin.create');
    Route::get('/{id}', [AdminController::class, 'show'])->name('admin.show');
    Route::put('/{id}', [AdminController::class, 'update'])->name('admin.update');
    Route::delete('/{id}', [AdminController::class, 'destroy'])->name('admin.delete');
});


Route::prefix('v1/user')->group(function () {
    Route::get('employers-with-companies', [UserController::class, 'employersWithCompanies'])->name('user.employersWithCompanies');
    Route::get('candidates-with-profiles', [UserController::class, 'candidatesWithProfiles'])->name('user.candidatesWithProfiles');
    Route::get('/role/{role}', [UserController::class, 'getByRole'])->name('user.getByRole');
    Route::get('/search', [UserController::class, 'search'])->name('user.search');
    Route::get('stats', [UserController::class, 'stats'])->name('user.stats');
    Route::middleware(['auth:api', 'role:candidate,employer,admin'])->group(function () {
        Route::get('/me', [UserController::class, 'show'])->name('user.show');
        Route::get('/me-with-profile', [UserController::class, 'getUserWithProfileAndStats'])->name('user.meWithProfile');
    });
});


Route::prefix('v1/category')->group(function () {
    // Ai cũng truy cập được
    Route::get('/', [CategoryController::class, 'index'])->name('category.getAll');
    Route::get('/category-by-name', [CategoryController::class, 'categoryAllByName'])->name('category.categoryByName');
    Route::get('/job-counts', [CategoryController::class, 'countJobsAllByCategory'])->name('category.countJobsAllByCategory');
    Route::get('/{id}', [CategoryController::class, 'show'])->name('category.show');

    // Chỉ admin mới được phép tạo, sửa, xóa
    Route::middleware(['auth:api', 'role:admin'])->group(function () {
        Route::post('/', [CategoryController::class, 'store'])->name('category.create');
        Route::put('/{id}', [CategoryController::class, 'update'])->name('category.update');
        Route::delete('/{id}', [CategoryController::class, 'destroy'])->name('category.delete');
    });
});


Route::prefix('v1/company')->group(function () {
    // Ai cũng truy cập được
    Route::get('/', [CompanyController::class, 'index'])->name('company.getAll');
    Route::get('/job-counts', [CompanyController::class, 'companiesWithJobCounts'])->name('company.companiesWithJobCounts');
    Route::get('/{id}', [CompanyController::class, 'show'])->name('company.show');
});

Route::prefix('v1/employer')->middleware(['auth:api', 'role:employer'])->group(function () {

    //  Dashboard
    Route::get('/dashboard', [EmployerController::class, 'dashboard'])
        ->name('employer.dashboard');
    Route::get('/analytics', [EmployerAnalyticsController::class, 'index']);

    //  Job Management
    Route::prefix('job')->group(function () {
        Route::get('/', [EmployerController::class, 'index'])->name('employer.job.index');
        Route::delete('/{id}', [EmployerController::class, 'destroy'])->name('employer.job.destroy');
        // Có thể thêm: Route::post('/', 'store'), Route::put('/{id}', 'update') nếu cần
    });

    //  Candidate Management
    Route::prefix('candidates')->group(function () {
        Route::get('/', [EmployerCandidateController::class, 'index'])->name('employer.candidate.index');
        Route::get('/{id}', [EmployerCandidateController::class, 'show'])->name('employer.candidate.show');
    });

    //  Company Management
    Route::prefix('company')->group(function () {
        Route::get('/', [EmployerCompanyController::class, 'show'])->name('employer.company.show');
        Route::post('/', [EmployerCompanyController::class, 'store'])->name('employer.company.store');
        Route::get('/stats', [EmployerCompanyController::class, 'stats'])->name('employer.company.stats');
    });

    //setting
    Route::get('/profile', [EmployerSettingsController::class, 'showProfile']);
    Route::put('/profile', [EmployerSettingsController::class, 'updateProfile']);
    Route::put('/password', [EmployerSettingsController::class, 'updatePassword']);
    Route::put('/notifications', [EmployerSettingsController::class, 'updateNotifications']);
    Route::put('/privacy', [EmployerSettingsController::class, 'updatePrivacy']);
});

Route::prefix('v1/job')->group(function () {
    // Ai cũng truy cập được
    Route::get('/', [JobController::class, 'index'])->name('job.getAll');
    Route::get('/filter', [JobController::class, 'filter'])->name('job.filter');
    // Route::get('/{id}', [JobController::class, 'show'])->name('job.show');

    // Chỉ admin mới được phép tạo, sửa, xóa
    Route::middleware(['auth:api', 'role:admin'])->group(function () {
        Route::post('/', [JobController::class, 'store'])->name('job.create');
        Route::put('/{id}', [JobController::class, 'update'])->name('job.update');
        Route::delete('/{id}', [JobController::class, 'destroy'])->name('job.delete');
    });
});
