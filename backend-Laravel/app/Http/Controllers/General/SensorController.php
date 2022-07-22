<?php

namespace App\Http\Controllers\General;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Slot;

class SensorController extends Controller
{
    // mainly from the sensors
    public function changeSlotState($id)
    {

        $slot = Slot::find($id);

        $curr_state = $slot->is_available;
        if ($curr_state == 0){
            $slot->is_available = 1;
        }else{
            $slot->is_available = 0;
        }
        $slot->save();

        return response()->json([
            "status" => "Success",
            "res"   => $slot
        ], 200);
    }
}
