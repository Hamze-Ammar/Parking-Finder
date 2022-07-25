<?php

namespace App\Http\Controllers\User;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Jobs\ResetReservation;
use App\Models\Parking;
use App\Models\Slot;
use App\Models\User;
use App\Models\Photo;
use App\Models\Favourite;
use App\Models\SearchRequest;
use App\Models\Review;
use App\Models\City;
use App\Models\Country;
use App\Models\Reservation;
use Auth;




class UserController extends Controller
{
    // When Users submit a form to become owners/partners
    public function becomePartner(Request $request)
    {
    
        try {
            $parking = new Parking;
            $parking->name = $request->name;
            $parking->latitude = $request->latitude;
            $parking->longitude = $request->longitude;
            $parking->opening_hr = $request->opening_hr;
            $parking->closing_hr = $request->closing_hr;
            $parking->description = $request->description;
            $parking->total_slots = $request->total_slots;
            $parking->photo_id = $request->photo_id;

            // register city
            $city = City::where('name', $request->city_name)->first();
            if ($city){
                $cityId =  $city->id;   
            }
            else{
                // If City was not found register new city; Hence this is not the best implementation
                $country = Country::where('name',$request->country_name)->first();
                $countryId =  $country->id;
                $new_city = new City;
                $new_city->name = $request->city_name;
                $new_city->country_id = $countryId;
                $new_city->save();
                $cityId = $new_city->id;
            }
            $parking->city_id = $cityId;


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
            return $e->getMessage();
            // return "Invalid input!";
        }
        catch (\QueryException $e) {
            // return $e->getMessage();
            return "Invalid input!";

        }
    }

    public function viewParking($id){

        $parking = Parking::find($id);

        if (!$parking || $parking->is_approved==0){
            return redirect(route("not-found"));
        }
        $parking->slots;
        $parking->city->name;
        $count = $parking->availableSlots()->count();

        return response()->json([
            "status" => "Success",
            "res"   => $parking,
            "availableSpots"   => $count,
        ], 200);
    }

    // Takes the slot id as parameter
    public function makeReservation($id){

        $slot = Slot::find($id);

        if(!$slot){
            return redirect(route("not-found"));
        }
        $slot->is_reserved = '1';
        $slot->save();

        // Register reservation is table
        $user = Auth::user();
        $reservation = new Reservation;
        $reservation->user_id = $user->id;
        $reservation->slot_id = $slot->id;
        $reservation->save();


        // Push job to queue to reset reservation; should be after 5 mins
        ResetReservation::dispatch($slot)->delay(9);

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }

    public function getHistories(){

        //Get user ID
        $user = Auth::user();
        $histories = $user->histories;

        if (!count($histories)){
            $response = "No records found";
        }else{
            $response = $histories;
        }

        return response()->json([
            "status" => "Success",
            "res"   => $response
        ], 200);
    }

    public function clearHistories(){

        //Get user ID
        $user = Auth::user();
        $histories = $user->histories;

        foreach ($histories as $history) {
            $history->user_id = 0 ;
            $history->save();
          }

        return response()->json([
            "status" => "Success",
            "res"   => $histories
        ], 200);
    }

    public function getUserProfile(){

        $user = Auth::user();

        return response()->json([
            "status" => "Success",
            "res"   => $user
        ], 200);
    }

    public function editProfile(Request $request){
        try {
            $user = Auth::user();
            $user->name = $request->name;
            $user->email = $request->email;
            if($request->password){
                $user->password = Hash::make($request->password);
            }
            $user->address = $request->address;
            $user->plate_number = $request->plate_number;
            $user->phone_number = $request->phone_number;
            $user->city_id = $request->city_id;

            // Check if profile pic was uploaded
            if($request->photo_src){
                $photo = new Photo;
                $photo->src = $request->photo_src;
                $photo->user_id = $user->id;
                $photo->save();
                $photo_id = $photo->id;
                $user->photo_id = $photo_id;
            }

            $user->save();

            return response()->json([
                "status" => "Success",
                "res"   => $user
            ], 200);
        }
        catch (\Exception $e) {
            // return $e->getMessage();
            return "Invalid input!";
        }
        catch (\QueryException $e) {
            // return $e->getMessage();
            return "Missing fields error!";
        }
    }

    public function addToFavorite($id){
        $user = Auth::user();
        $favourite = new Favourite;
        $favourite->user_id = $user->id;
        $favourite->parking_id = $id;

        $favourite->save();

        return response()->json([
            "status" => "Success",
            "res"   => $favourite
        ], 200);
    }

    public function getFavorites(){
        $user = Auth::user();

        
        $myFavourites = $user->favourites;
        
        return response()->json([
            "status" => "Success",
            "res"   => $myFavourites
        ], 200);
    }

    public function removeFromFavorite($id){
        // The id that was received here is the id of the parking
        $user = Auth::user();
        $user_id = $user->id;

        $favourite = Favourite::where('parking_id',$id)->where('user_id', $user_id);

        if ($favourite==true){
            $favourite->delete();
        }else{
            $favourite = 'Favourite not found!';
        }

        return response()->json([
            "status" => "Success",
            "res"   => $favourite
        ], 200);
    }

    // Everytime the user presses the search button to look for parkings; collecting data
    public function searchRequest(Request $request){
        $city = $request->city;
        $city = strtolower($city);
        $myCity = City::where('name', $city)->first();

        $city_id = $myCity->id;
        $user = Auth::user();

        $search_request = new SearchRequest;
        $search_request->user_id = $user->id;
        $search_request->city_id = $city_id;

        $search_request->save();

        return response()->json([
            "status" => "Success",
            "res"   => $search_request
        ], 200);
    }

    public function addReview(Request $request){
        $user = Auth::user();
        $review = new Review;
        $review->context = $request->context;
        $review->rate = $request->rate;
        $review->parking_id = $request->parking_id;
        $review->user_id = $user->id;

        $review->save();
        return response()->json([
            "status" => "Success",
            "res"   => $review
        ], 200);
    }

    public function getOverviewInfo(){
        $user = Auth::user();
        $total_reservations = $user->reservations()->count();
        $total_requests = $user->searchRequests()->count();

        $myResponse = array(
            "total_reservations" => $total_reservations,
            "total_requests"    => $total_requests
        );

        return response()->json([
            "status" => "Success",
            "res"   => $myResponse
        ], 200);
    }
}
