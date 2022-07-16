<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;

use App\Models\Favourite;
use Illuminate\Http\Request;
use Auth;

class FavouriteController extends Controller
{
    public function getFavouriteParkings(){
        $user = Auth::user();
        $user_id = $user->id;
        
        $myFavourites = $user->favourites;
        foreach ($myFavourites as $favourite) {
            // echo $favourite->id;
            $favourite_id = $favourite->id;
            $fav = Favourite::find($favourite_id);
            // echo $fav->parking;
            // echo 'hi';
            $parking_info = $fav->parking;
            $favourite->parking = $parking_info;
          }
        return response()->json([
            "status" => "Success",
            "res"   => $myFavourites,
        ], 200);
    }
}
