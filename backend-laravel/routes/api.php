<?php

use App\Http\Controllers\Apis\AuthController;
use Illuminate\Http\Request;
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
