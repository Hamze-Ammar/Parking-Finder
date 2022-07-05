<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\Authentication\JWTController;
use App\Http\Controllers\Owner\OwnerController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\General\CityController;
use App\Http\Controllers\General\ParkingController;
use App\Http\Controllers\General\SensorController;

Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

Route::post('/becomePartner', [UserController::class, 'becomePartner']);
Route::get('/viewParking/{id}', [UserController::class, 'viewParking']);
Route::put('/makeReservation/{id}', [UserController::class, 'makeReservation']);
Route::put('/resetReservation/{id}', [UserController::class, 'resetReservation']);

Route::get('/getPendingRequests/{id?}', [AdminController::class, 'getPendingRequests']);
Route::post('/acceptRequest/{id}', [AdminController::class, 'acceptRequest']);
Route::post('/declineRequest/{id}', [AdminController::class, 'declineRequest']);

Route::get('/getCitiesByCountryId/{id?}', [CityController::class, 'getCitiesByCountryId']);

Route::get('/getParkingsByCityId/{id?}', [ParkingController::class, 'getParkingsByCityId']);

Route::put('/changeSlotState/{id}', [SensorController::class, 'changeSlotState']);