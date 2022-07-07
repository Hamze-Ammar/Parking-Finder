<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Parking;
use App\Models\User;
use Auth;


class OwnerController extends Controller
{
    public function addParking(Request $request)
    {
        $parking = new Parking;
        $parking->name = $request->name;
        $parking->location = $request->location;
        $parking->opening_hr = $request->opening_hr;
        $parking->closing_hr = $request->closing_hr;
        $parking->description = $request->description;
        $parking->total_slots = $request->total_slots;
        $parking->city_id = $request->city_id;
        $parking->photo_id = $request->photo_id;

        $user = Auth::user();
        $parking->user_id = $user->id;
        
        $parking->save();

        return response()->json([
            "status" => "Success",
            "res"   => $parking
        ], 200);
    }


}
