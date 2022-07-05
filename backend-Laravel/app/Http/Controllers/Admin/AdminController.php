<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Parking;
use App\Models\User;
use Auth;



class AdminController extends Controller
{
    public function getPendingRequests($id=null)
    {
        if($id){
            $requests= Parking::find($id);
        }
        else{
            $requests = Parking::where("is_approved", "0")->get();
        }


        return response()->json([
            "status" => "Success",
            "res"   => $requests
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
        $user->type = "1";
        $user->is_approved = "1";
        $user->save();
        
        return response()->json([
            "status" => "Success",
            "msg"   => "Parking has been Accepted",
            "res"   => $parking,
            "user" => $user
        ], 200);

    }
}
