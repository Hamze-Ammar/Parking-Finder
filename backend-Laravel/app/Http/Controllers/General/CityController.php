<?php

namespace App\Http\Controllers\General;

use App\Models\City;
use App\Models\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class CityController extends Controller
{
    public function getCitiesCountries()
    {
        $city = City::find(1);

        $response = array(
            'city' => $city->name,
            'country' => $city->country->name
        );

        return response()->json([
            "status" => "Success",
            "res"   => $response
        ], 200);

    }

    // Accepts Country id
    public function getCitiesByCountryId($id=null)
    {
        if ($id){
            // since our model is going to be for Lebanon for now
            if($id=='118'){
                $response = City::where('country_id', $id)->get();
            }
            else{
                $response = 'Service is not available';
            }
        }
        else{
            $response = City::all();
        }

        return response()->json([
            "status" => "Success",
            "res"   => $response
        ], 200);
    }
}
