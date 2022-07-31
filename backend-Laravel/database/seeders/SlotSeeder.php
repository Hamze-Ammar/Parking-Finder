<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Slot;


class SlotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('slots')->delete();

        $Records = [
            ['id'=>1,  'number'=>1,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>2,  'number'=>2,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>3,  'number'=>3,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>4,  'number'=>4,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>5,  'number'=>5,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>6,  'number'=>6,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>7,  'number'=>7,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>8,  'number'=>8,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>9,  'number'=>9,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>10, 'number'=>10, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>11, 'number'=>11, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>12, 'number'=>12, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>13, 'number'=>13, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>14, 'number'=>14, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>15, 'number'=>15, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>16, 'number'=>16, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>17, 'number'=>17, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>18, 'number'=>18, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>19, 'number'=>19, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],
            ['id'=>20, 'number'=>20, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'1'],

            ['id'=>21, 'number'=>1,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>22, 'number'=>2,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>23, 'number'=>3,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>24, 'number'=>4,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>25, 'number'=>5,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>26, 'number'=>6,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>27, 'number'=>7,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>28, 'number'=>8,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>29, 'number'=>9,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>30, 'number'=>10, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>31, 'number'=>11, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>32, 'number'=>12, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>33, 'number'=>13, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>34, 'number'=>14, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>35, 'number'=>15, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>36, 'number'=>16, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>37, 'number'=>17, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>38, 'number'=>18, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>39, 'number'=>19, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],
            ['id'=>40, 'number'=>20, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'2'],

            ['id'=>41, 'number'=>1,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>42, 'number'=>2,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>43, 'number'=>3,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>44, 'number'=>4,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>45, 'number'=>5,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>46, 'number'=>6,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>47, 'number'=>7,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>48, 'number'=>8,  'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>49, 'number'=>9,  'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>50, 'number'=>10, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>51, 'number'=>11, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>52, 'number'=>12, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>53, 'number'=>13, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>54, 'number'=>14, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>55, 'number'=>15, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>56, 'number'=>16, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>57, 'number'=>17, 'is_available'=>0, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>58, 'number'=>18, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>59, 'number'=>19, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],
            ['id'=>60, 'number'=>20, 'is_available'=>1, 'is_reserved'=>0, 'parking_id'=>'3'],

        ];
        Slot::insert($Records);
    }
}
