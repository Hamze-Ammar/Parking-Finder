<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Parking;
use App\Models\User;
use App\Models\Slot;
use App\Models\Country;
use Auth;



class AdminController extends Controller
{
    public function getPendingRequests($id=null)
    {
        if($id){
            $response= Parking::find($id);
        }
        else{
            $parkings = Parking::where("is_approved", "0")->get();

            $response = array();
            foreach ($parkings as $parking) {
                $city = $parking->city;
                $user = $parking->user;
                $country = Country::find($city->country_id);
                $res = array(
                    "id"                    => $parking->id,    
                    "name"                  => $parking->name,
                    "opening_hr"            => $parking->opening_hr,
                    "closing_hr"            => $parking->closing_hr,
                    "total_slots"           => $parking->total_slots,
                    "country"               => $country->name,
                    "city"                  => $city->name,
                    "owner_name"            => $user->name,
                    "owner_email"           => $user->email,
                    "owner_phone_number"    => $user->phone_number,
                );
                array_push($response, $res);
              }
        }
        
        return response()->json([
            "status" => "Success",
            "res"   => $response
        ], 200);


    }

    // Accepts the id of the parking that is on pending mode
    public function acceptRequest($id)
    {
        $parking = Parking::find($id);
        $parking->is_approved = "1";
        $parking->save();

        // Once approved we need to update the user type to Owner
        $user_id = $parking->user_id;
        $user = User::find($user_id);
        $user->user_type_id = "2";
        $user->is_approved = "1";
        $user->save();

        // Once approved we need also to add the slots to database
        $number_of_slots = $parking->total_slots;

        for ($i=1; $i<=$number_of_slots ; $i++){
            $slot = new Slot;
            $slot->number = $i;
            $slot->parking_id = $id;
            $slot->save();
        }

        return response()->json([
            "status" => "Success",
            "msg"   => "Parking has been accepted"
        ], 200);

    }

    // Accepts the id of the parking that is on pending mode
    public function declineRequest($id)
    {
        $parking = Parking::find($id);
        $parking->is_approved = "-1";
        $parking->save();

        // Once declined we need to update the user
        $user_id = $parking->user_id;
        $user = User::find($user_id);
        $user->is_approved = "-1";
        $user->save();
        
        return response()->json([
            "status" => "Success",
            "msg"   => "Parking has been rejected"
        ], 200);

    }
}
