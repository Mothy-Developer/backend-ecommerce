<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\Role;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Resource User
Route::resource('user', UserController::class);
Route::post('user', [UserController::class, 'store'])->name('user.store');
Route::put('user/{id}', [UserController::class, 'update'])->name('user.update');
Route::delete('user/{id}', [UserController::class, 'destroy'])->name('user.destroy');

// Resource Dashboard
Route::resource('dashboard', DashboardController::class);
Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

// Resource Product
Route::resource('product', ProductController::class);
Route::get('product', [ProductController::class, 'index'])->name('product');

Route::get('/product-gallery', function () {
    return Inertia::render('ProductGallery/Index');
})->middleware(['auth', 'verified'])->name('product-gallery');

Route::get('/product-category', function () {
    return Inertia::render('ProductCategory/Index');
})->middleware(['auth', 'verified'])->name('product-category');

Route::get('/transaction', function () {
    return Inertia::render('Transaction/Index');
})->middleware(['auth', 'verified'])->name('transaction');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
