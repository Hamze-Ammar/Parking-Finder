<?php

namespace App\Http\Controllers\General;

use App\Models\Parking;
use App\Models\Review;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ParkingController extends Controller
{
    public function getParkingsByCityId($id=null)
    {


        if ($id){
            $response = Parking::where('city_id', $id)->get();
            if(count($response)){
                foreach ($response as $parking) {
                    $parking->reviews;
                }
            }

            if (count($response)==0){
                $response='No parkings available in this area!';
            }
        }
        else {
            $response = Parking::all();
            foreach ($response as $parking) {
                $parking->reviews;
            }
        }

        return response()->json([
            "status" => "Success",
            "res"   => $response
        ], 200);
    }

    public function getParkingRate($id)
    {
        $reviews = Review::where('parking_id', $id)->get();

        $sum = 0;
        $total = 0;
        foreach ($reviews as $review) {
            $sum += intval($review->rate);
            $total++;
        }
        if ($total){
            $rate = $sum/$total;
            $res =  round($rate, 2);
        }else {
            $res = 'New';
        }

        return response()->json([
            "status" => "Success",
            "res"   => $res
        ], 200);
    }

}


