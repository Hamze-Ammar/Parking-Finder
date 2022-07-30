<?php

namespace App\Http\Controllers\General;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Slot;

class SensorController extends Controller
{
    // mainly from the sensors
    public function setSlotToFree($id)
    {

        $slot = Slot::find($id);

        if($slot){
            $slot->is_available = 1;
        }

        $slot->save();

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }

    public function setSlotToBusy($id)
    {

        $slot = Slot::find($id);

        if($slot){
            $slot->is_available = 0;
        }
        
        $slot->save();

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }
}
