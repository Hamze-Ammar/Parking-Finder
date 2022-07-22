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
use App\Http\Controllers\General\FavouriteController;
use App\Http\Controllers\System\NotFoundController;
use App\Http\Controllers\LocationController;

Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'user'], function(){
        Route::group(['middleware' => 'api'], function($router) {
            Route::post('/register', [JWTController::class, 'register']);
            Route::post('/login', [JWTController::class, 'login']);
            Route::post('/logout', [JWTController::class, 'logout']);
            Route::post('/refresh', [JWTController::class, 'refresh']);
            Route::post('/profile', [JWTController::class, 'profile']);
        });
    
        Route::group(['middleware' => 'role.user'], function(){
            Route::post('/becomePartner', [UserController::class, 'becomePartner']);
            Route::get('/viewParking/{id}', [UserController::class, 'viewParking']);
            Route::put('/makeReservation/{id}', [UserController::class, 'makeReservation']);
            Route::put('/resetReservation/{id}', [UserController::class, 'resetReservation']);
            Route::get('/getHistories', [UserController::class, 'getHistories']);
            Route::delete('/clearHistories', [UserController::class, 'clearHistories']);
            Route::get('/getUserProfile', [UserController::class, 'getUserProfile']);
            Route::put('/editProfile', [UserController::class, 'editProfile']);
            Route::post('/addToFavorite/{id}', [UserController::class, 'addToFavorite']);
            Route::get('/getFavorites', [UserController::class, 'getFavorites']);
            Route::delete('/removeFromFavorite/{id}', [UserController::class, 'removeFromFavorite']);
            Route::post('/searchRequest', [UserController::class, 'searchRequest']);
            Route::post('/addReview', [UserController::class, 'addReview']);
        });
    });

    Route::group(['prefix' => 'owner'], function(){
        Route::group(['middleware' => 'role.owner'], function(){
            Route::post('/addParking', [OwnerController::class, 'addParking']);
            Route::put('/reserveSlot/{id}', [OwnerController::class, 'reserveSlot']);
            Route::put('/removeReservation/{id}', [OwnerController::class, 'removeReservation']);
            Route::put('/toggleSlotAvailability/{id}', [OwnerController::class, 'toggleSlotAvailability']);
            Route::put('/toggleSlotReservation/{id}', [OwnerController::class, 'toggleSlotReservation']);
        });
    });
    
    Route::group(['prefix' => 'admin'], function(){
        Route::group(['middleware' => 'role.admin'], function(){
            Route::get('/getPendingRequests/{id?}', [AdminController::class, 'getPendingRequests']);
            Route::post('/acceptRequest/{id}', [AdminController::class, 'acceptRequest']);
            Route::post('/declineRequest/{id}', [AdminController::class, 'declineRequest']);
        });
    });
    
    Route::group(['prefix' => 'info'], function(){
        Route::group(['middleware' => 'role.user'], function(){
            Route::get('/getCitiesByCountryId/{id?}', [CityController::class, 'getCitiesByCountryId']);
            Route::get('/getParkingsByCityId/{id?}', [ParkingController::class, 'getParkingsByCityId']);
            Route::get('/getParkingsByCityName/{name}', [ParkingController::class, 'getParkingsByCityName']);
            Route::get('/nearestParkings', [ParkingController::class, 'findNearestParkings']);
            Route::get('/getParkingRate/{id}', [ParkingController::class, 'getParkingRate']);
            Route::post('/addToHistory', [HistoryController::class, 'addToHistory']);
            Route::post('/updateHistory', [HistoryController::class, 'updateHistory']);
            Route::get('/getFavouriteParkings', [FavouriteController::class, 'getFavouriteParkings']);
        });
    });

    Route::group(['prefix' => 'system'], function(){
        Route::get('/changeSlotState/{id}', [SensorController::class, 'changeSlotState']);
        Route::get('/not_found', [NotFoundController::class, 'notFound'])->name("not-found");
    });
});


Route::get('/not_found', [NotFoundController::class, 'notFound'])->name("not-found");

// Route::get('nearplaces', [LocationController::class, 'findNearestParkings']);