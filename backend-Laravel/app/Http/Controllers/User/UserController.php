<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Jobs\ResetReservation;
use App\Models\Parking;
use App\Models\Slot;
use App\Models\User;
use Auth;

// About the queue: go to .env and make sure that 'QUEUE_CONNECTION=database
// php artisan queue:work | Run this command to start a worker


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

    public function viewParking($id)
    {
        $parking = Parking::find($id);
        $parking->availableSlots;

        return response()->json([
            "status" => "Success",
            "res"   => $parking
        ], 200);
    }

    // Takes the slot id as parameter
    public function makeReservation($id)
    {
        $slot = Slot::find($id);
        $slot->is_reserved = '1';
        $slot->save();

        // $reset = new ResetReservation($id);
        // $reset->handle();

        // $batch = [ new ResetReservation($id)];
        // \Illuminate\Support\Facades\Bus::batch($batch)->dispatch();
        
        // ResetReservation::dispatch()->delay(2);

        echo "making reservation";

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }

    //reset reservation is sleeps for 5 min and the it resets
    public function resetReservation($id)
    {
        // sleep(5);
        // $slot = Slot::find($id);
        // $slot->is_reserved = '0';
        // $slot->save();

        // return response()->json([
        //     "status" => "Success",
        //     "res"   => $slot
        // ], 200);
    
    } 

    public function getHistories()
    {
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

    public function clearHistories()
    {
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

}

