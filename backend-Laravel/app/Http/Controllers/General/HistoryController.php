<?php

namespace App\Http\Controllers\General;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\History;
use App\Models\Slot;
use Carbon\Carbon;



class HistoryController extends Controller
{
    // Histories will be stored every time a slot became occupied and updated once it is free
    // it should take the slot id for now as parameter and it could take the user id when applicable 

    public function addToHistory(Request $request)
    {
        $history = new History;
        $history->user_id = $request->user_id;
        $history->slot_id = $request->slot_id;
        $history->parking_id = Slot::find($request->slot_id)->parking->id;
        $history->save();

        return response()->json([
            "status" => "Success",
            "res"   => $history
        ], 200);
    }

    // Accepts history_id and time to update and finalize the history record
    // It should be triggered everytime the spot returns free/available
    public function updateHistory(Request $request)
    {

        $history = History::find($request->id);
        $history->updated_at = Carbon::now()->toDateTimeString();

        $history->save();

        return response()->json([
            "status" => "Success",
            "res"   => $history
        ], 200);
    }
}
