<?php

use App\Http\Controllers\Apis\AuthController;
use App\Http\Controllers\Apis\UserController;
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

// Route::group([
//     'middleware' => 'api',
//     'prefix' => 'v1/auth'
// ], function () {
//     Route::post('login', [AuthController::class, 'loginApi'])->name('auth.loginApi');
//     Route::post('register', [AuthController::class, 'registerApi'])->name('auth.register');
//     Route::get('verify/{token}', [AuthController::class, 'verifyToken']);
//     Route::post('logout', [AuthController::class, 'logout'])->name('auth.logout');
//     Route::get('me', [AuthController::class, 'me'])->name('auth.me');
// });
Route::prefix('v1/auth')->group(function () {
    Route::post('login', [AuthController::class, 'loginApi'])->name('auth.loginApi');
    Route::post('register', [AuthController::class, 'registerApi'])->name('auth.register');
    Route::get('verify/{token}', [AuthController::class, 'verifyToken'])->name('auth.verify');
    Route::post('logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::get('me', [AuthController::class, 'me'])->name('auth.me');
});

// admin routes
Route::prefix('v1/user')->middleware(['auth:api', 'role:admin'])->group(function () {
    Route::get('employers-with-companies', [UserController::class, 'employersWithCompanies'])->name('user.employersWithCompanies');
    Route::get('candidates-with-profiles', [UserController::class, 'candidatesWithProfiles'])->name('user.candidatesWithProfiles');
    Route::get('/search', [UserController::class, 'search'])->name('user.search');
    Route::get('stats', [UserController::class, 'stats'])->name('user.stats');
    Route::get('/', [UserController::class, 'index'])->name('user.getAll');
    Route::post('/', [UserController::class, 'store'])->name('user.create');
    Route::get('/{id}', [UserController::class, 'show'])->name('user.show');
    Route::put('/{id}', [UserController::class, 'update'])->name('user.update');
    Route::delete('/{id}', [UserController::class, 'destroy'])->name('user.delete');

    Route::get('/role/{role}', [UserController::class, 'getByRole'])->name('user.getByRole');
    // Route::post('verify/{id}', [UserController::class, 'verify'])->name('user.verify');
});
