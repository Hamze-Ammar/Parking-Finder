<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Parking;
use App\Models\User;
use App\Models\Slot;
use Auth;


class OwnerController extends Controller
{
    public function addParking(Request $request)
    {
        $parking = new Parking;
        $parking->name = $request->name;
        $parking->location = $request->location;
        $parking->opening_hr = $request->opening_hr;
        $parking->closing_hr = $request->closing_hr;
        $parking->description = $request->description;
        $parking->total_slots = $request->total_slots;
        $parking->city_id = $request->city_id;
        $parking->photo_id = $request->photo_id;

        $user = Auth::user();
        $parking->user_id = $user->id;
        
        $parking->save();

        return response()->json([
            "status" => "Success",
            "res"   => $parking
        ], 200);
    }

    public function reserveSlot($id)
    {
        $slot = Slot::find($id);
        $slot->is_reserved = '1';
        $slot->save();

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }

    public function removeReservation($id)
    {
        $slot = Slot::find($id);
        $slot->is_reserved = '0';
        $slot->save();

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }

    public function toggleSlotAvailability($id)
    {
        $slot = Slot::find($id);
        $is_available = $slot->is_available;

        if ($is_available=='0'){
            $slot->is_available='1';
        }else{
            $slot->is_available='0';
        }
        $slot->save();

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }

    public function toggleSlotReservation($id)
    {
        $slot = Slot::find($id);
        $is_reserved = $slot->is_reserved;

        if ($is_reserved=='0'){
            $slot->is_reserved='1';
        }else{
            $slot->is_reserved='0';
        }
        $slot->save();

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }


}
