<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Parking;


class ParkingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('parkings')->delete();

        $Records = [
            ['id'=>1, 'name'=>'Parking101', 'latitude'=>'33.88714322', 'longitude'=>'35.51345096', 'opening_hr'=>'07:00', 'closing_hr'=>'20:00', 'description'=>'The Best Parking ever', 'total_slots'=>'20', 'is_open'=>'1', 'is_full'=>'0', 'city_id'=>1, "is_approved"=>1, 'user_id'=>'2', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>2, 'name'=>'Parking102', 'latitude'=>'33.82714322', 'longitude'=>'34.49345096', 'opening_hr'=>'08:00', 'closing_hr'=>'21:00', 'description'=>'The Best Parking ever', 'total_slots'=>'20', 'is_open'=>'1', 'is_full'=>'0', 'city_id'=>1, "is_approved"=>1, 'user_id'=>'3', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>3, 'name'=>'Parking103', 'latitude'=>'33.86714322', 'longitude'=>'35.52345096', 'opening_hr'=>'09:00', 'closing_hr'=>'22:00', 'description'=>'The Best Parking ever', 'total_slots'=>'20', 'is_open'=>'1', 'is_full'=>'0', 'city_id'=>1, "is_approved"=>1, 'user_id'=>'4', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>4, 'name'=>'Parking104', 'latitude'=>'33.89714322', 'longitude'=>'35.48345096', 'opening_hr'=>'10:00', 'closing_hr'=>'23:00', 'description'=>'The Best Parking ever', 'total_slots'=>'20', 'is_open'=>'1', 'is_full'=>'0', 'city_id'=>1, "is_approved"=>0, 'user_id'=>'2', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>5, 'name'=>'Parking105', 'latitude'=>'33.82714322', 'longitude'=>'34.48345096', 'opening_hr'=>'11:00', 'closing_hr'=>'23:30', 'description'=>'The Best Parking ever', 'total_slots'=>'45', 'is_open'=>'1', 'is_full'=>'0', 'city_id'=>1, "is_approved"=>0, 'user_id'=>'2', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>6, 'name'=>'Parking106', 'latitude'=>'33.81714322', 'longitude'=>'34.98345096', 'opening_hr'=>'12:00', 'closing_hr'=>'00:00', 'description'=>'The Best Parking ever', 'total_slots'=>'50', 'is_open'=>'1', 'is_full'=>'0', 'city_id'=>1, "is_approved"=>-1, 'user_id'=>'2', 'created_at'=>date("Y-m-d H:i:s")],


        ];
        Parking::insert($Records);
    }
}
