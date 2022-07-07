<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\UserType;


class UserTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_types')->delete();

        $Records = [
            ['id'=>1, 'type'=>'user'],
            ['id'=>2, 'type'=>'owner'],
            ['id'=>3, 'type'=>'admin']
        ];
        UserType::insert($Records);
        
    }
}
