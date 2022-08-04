<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Parking;
use App\Models\User;
use App\Models\Slot;
use App\Models\Country;
use App\Models\Favourite;
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

    public function deleteParking($id)
    {
        $parking = Parking::find($id);
        if($parking){
            $parking->delete();
        }else{
            return response()->json(["res"=>"Parking not found"]);
        }

        // Once deleted we need to delete all its slots if any
        $slots = Slot::where('parking_id', $id)->get();
        $count = 0;
        if($slots){
            $count = count($slots);
            foreach ($slots as $slot) {
                $slot->delete();
            }
        }

        // Delete all favourites that have this parking id
        $favourites = Favourite::where('parking_id', $id);
        if($favourites){
            foreach ($favourites as $favourite){
                $favourite->delete();
            }
        }

        $msg = "1 Parking and ". $count . " Slots have been permanently deleted!";
        
        return response()->json([
            "status" => "Success",
            "msg"   => $msg,
            "res"   => $parking
        ], 200);

    }
    

    public function getAllParkings(){

        $parkings = Parking::all();

        foreach ($parkings as $parking) {
            $num_of_total_slots = $parking->totalSlots()->count();
            $parking->num_of_active_slots = $num_of_total_slots;

            $city = $parking->city;
            $city_name = $city->name;
            $user = $parking->user;
            $user_name = $user->name;
            $country = Country::find($city->country_id);
            $country_name = $country->name;

            $parking->city_name = $city_name;
            $parking->country_name =  $country_name;
            $parking->user_name = $user_name;

        }

        return response()->json([
            "status" => "Success",
            "res"   => $parkings
        ], 200);
    }

    public function getOverviewHeader(){
        $num_of_users = User::all()->count();
        $num_of_parkings = Parking::all()->count();
        $num_of_slots = Slot::all()->count();
        $num_of_cities = DB::table('parkings')->distinct('city_id')->count('name');

        // Get the actual number of countries where we still have active parkings
        // Since we dont have a col country_id in the parkings table
        // we need to track the city_id column
        $cities_ids = DB::table('parkings')->distinct('city_id')->get('city_id');
        $array_of_cities_ids = [];
        foreach ($cities_ids as $city_id){
            array_push($array_of_cities_ids, $city_id->city_id);
        };
        $num_of_countries = DB::table('cities')->whereIn('id', $array_of_cities_ids)->distinct('country_id')->count('country_id');


        $response = array(
            'num_of_users' => $num_of_users,
            'num_of_parkings' => $num_of_parkings,
            'num_of_slots' => $num_of_slots,
            'num_of_countries' => $num_of_countries,
            'num_of_cities' => $num_of_cities,
        );

        return response()->json([
            "status" => "Success",
            "res"   => $response
        ], 200);
    }

    // Table::select('name','surname')->where('id', 1)->get();

    public function getAllUsersAndSlots(){
        $users = User::select('created_at')->get();
        $slots = Slot::select('created_at')->get();

        return response()->json([
            "status" => "Success",
            "users"   => $users,
            "slots"   => $slots,
        ], 200);
    }
}
