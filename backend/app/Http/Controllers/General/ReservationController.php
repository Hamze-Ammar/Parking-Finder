<?php

namespace App\Http\Controllers\General;

use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ReservationController extends Controller
{
   public function getAllReservations(){

        $reservations = Reservation::all();

        return response()->json([
            "status" => "Success",
            "res"   => $reservations
        ], 200);
    }
   

}
   
    

