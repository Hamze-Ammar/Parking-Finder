<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Parking;


class LocationController extends Controller
{

    public function findNearestParkings(Request $request)
    {
        $latitude = $request->lat;
        $longitude = $request->long;
        $radius = 4000;
        // die($latitude);
        /*
         * replace 6371000 with 6371 for kilometer and 3956 for miles
         */
        $parkings = Parking::selectRaw("id, name, latitude, longitude,
                         ( 6371000 * acos( cos( radians(?) ) *
                           cos( radians( latitude ) )
                           * cos( radians( longitude ) - radians(?)
                           ) + sin( radians(?) ) *
                           sin( radians( latitude ) ) )
                         ) AS distance", [$latitude, $longitude, $latitude])
            ->where('is_approved', '=', 1)
            ->having("distance", "<", $radius)
            ->orderBy("distance",'asc')
            ->offset(0)
            ->limit(20)
            ->get();

            
        return response()->json([
            "status" => "Success",
            "res"   => $parkings
        ], 200);
    }
}
