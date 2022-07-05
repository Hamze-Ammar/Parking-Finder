<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\Authentication\JWTController;
use App\Http\Controllers\Owner\OwnerController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\General\CityController;

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

Route::post('/becomePartner', [UserController::class, 'becomePartner']);

Route::get('/getPendingRequests/{id?}', [AdminController::class, 'getPendingRequests']);
Route::post('/acceptRequest/{id}', [AdminController::class, 'acceptRequest']);
Route::post('/declineRequest/{id}', [AdminController::class, 'declineRequest']);

Route::get('/getCitiesByCountryId/{id?}', [CityController::class, 'getCitiesByCountryId']);