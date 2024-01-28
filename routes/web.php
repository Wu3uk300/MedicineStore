<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/create-item', [\App\Http\Controllers\ItemController::class, 'createItem'])->name('create-item');

// Main route for index page of application
Route::group([], function() {
//    Route::get('/', [ShowAppController::class, 'showApp']);
    // If the page is not found (code 404), it automatically follows this route and return the main page
    Route::get("{any?}", [App\Http\Controllers\HomeController::class, 'index'])->where('any', '.*');
});
