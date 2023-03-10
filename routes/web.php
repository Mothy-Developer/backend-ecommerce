<?php

use App\Http\Controllers\ProfileController;
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
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/user', function () {
    return Inertia::render('User');
})->middleware(['auth', 'verified'])->name('user');

Route::get('/product', function () {
    return Inertia::render('Product');
})->middleware(['auth', 'verified'])->name('product');

Route::get('/product-gallery', function () {
    return Inertia::render('ProductGallery');
})->middleware(['auth', 'verified'])->name('product-gallery');

Route::get('/product-category', function () {
    return Inertia::render('ProductCategory');
})->middleware(['auth', 'verified'])->name('product-category');

Route::get('/transaction', function () {
    return Inertia::render('Transaction');
})->middleware(['auth', 'verified'])->name('transaction');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
