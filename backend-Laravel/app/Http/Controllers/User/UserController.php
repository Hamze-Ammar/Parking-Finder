<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Parking;
use App\Models\User;
use Auth;



class UserController extends Controller
{
    // When Users submit a form to become owners/partners
    public function becomePartner(Request $request)
    {
        try {
            $parking = new Parking;
            $parking->name = $request->name;
            $parking->opening_hr = $request->opening_hr;
            $parking->closing_hr = $request->closing_hr;
            $parking->description = $request->description;
            $parking->total_slots = $request->total_slots;
            $parking->city_id = $request->city_id;

            //Get user ID
            $user = Auth::user();
            $parking->user_id = $user->id;

            $parking->save();

            return response()->json([
                "status" => "Success",
                "res"   => $parking
            ], 200);
        }
        catch (\Exception $e) {
            // return $e->getMessage();
            return "Invalid input!";
        }
        catch (\QueryException $e) {
            // return $e->getMessage();
            return "Invalid input!";

        }
    }
}
