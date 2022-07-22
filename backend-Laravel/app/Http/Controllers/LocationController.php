<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Parking;


class LocationController extends Controller
{
        // ---------------- [ Load View ] ----------------
        public function index(Request $request) {
    
            $lat = 33.8911736;
            $lon = 35.5059611;
            // die($lat);
        
            // $data = DB::table("parkings")
            //     ->select("parkings.id"
            //         ,DB::raw("6371 * acos(cos(radians(" . $lat . ")) 
            //         * cos(radians(parkings.lat)) 
            //         * cos(radians(parkings.lon) - radians(" . $lon . ")) 
            //         + sin(radians(" .$lat. ")) 
            //         * sin(radians(parkings.lat))) AS distance"))
            //         ->groupBy("parkings.id")
            //         ->get();


            // dd($data);
    }

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
