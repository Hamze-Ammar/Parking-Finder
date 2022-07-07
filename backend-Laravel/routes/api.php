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
use App\Http\Controllers\General\HistoryController;

Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'user'], function(){
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
        Route::get('/getHistories', [UserController::class, 'getHistories']);
        Route::delete('/clearHistories', [UserController::class, 'clearHistories']);
        Route::get('/getUserProfile', [UserController::class, 'getUserProfile']);
        Route::put('/editProfile', [UserController::class, 'editProfile']);
        Route::post('/addToFavorite', [UserController::class, 'addToFavorite']);

    });

    Route::group(['prefix' => 'owner'], function(){
        Route::post('/addParking', [OwnerController::class, 'addParking']);

    });

    Route::get('/getPendingRequests/{id?}', [AdminController::class, 'getPendingRequests']);
    Route::post('/acceptRequest/{id}', [AdminController::class, 'acceptRequest']);
    Route::post('/declineRequest/{id}', [AdminController::class, 'declineRequest']);

    Route::get('/getCitiesByCountryId/{id?}', [CityController::class, 'getCitiesByCountryId']);

    Route::get('/getParkingsByCityId/{id?}', [ParkingController::class, 'getParkingsByCityId']);

    Route::get('/changeSlotState/{id}', [SensorController::class, 'changeSlotState']);

    Route::post('/addToHistory', [HistoryController::class, 'addToHistory']);
    Route::post('/updateHistory', [HistoryController::class, 'updateHistory']);

});