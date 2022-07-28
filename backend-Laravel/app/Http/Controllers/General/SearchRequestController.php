<?php

namespace App\Http\Controllers\General;

use App\Models\SearchRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;



class SearchRequestController extends Controller
{
   public function getSearchRequests(){

        $searchRequests = SearchRequest::all();

        return response()->json([
            "status" => "Success",
            "res"   => $searchRequests
        ], 200);
   }
}
