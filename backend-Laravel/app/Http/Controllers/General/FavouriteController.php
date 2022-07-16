<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;

use App\Models\Favourite;
use App\Models\Parking;
use Illuminate\Http\Request;
use Auth;

class FavouriteController extends Controller
{
    public function getFavouriteParkings(){
        $user = Auth::user();
        $myFavourites = $user->favourites;

        foreach ($myFavourites as $favourite) {
            $favourite_id = $favourite->id;
            $fav = Favourite::find($favourite_id);
            $parking_info = $fav->parking;
            $park = Parking::find($parking_info->id);
            $parking = $park->city;
            $favourite->parking_address = $parking->name;
            $favourite->parking_info = $parking_info;
          }
        

        return response()->json([
            "status" => "Success",
            "res"   => $myFavourites,
        ], 200);
    }
}
