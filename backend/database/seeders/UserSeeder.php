<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        $Records = [
            ['id'=>1, 'name'=>'user',    'email'=>'user@user.com',       'password'=>bcrypt('123123') , 'user_type_id'=>'1', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>2, 'name'=>'owner10', 'email'=>'owner10@owner.com',   'password'=>bcrypt('123123') , 'user_type_id'=>'2', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>3, 'name'=>'owner20', 'email'=>'owner20@owner.com',   'password'=>bcrypt('123123') , 'user_type_id'=>'2', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>4, 'name'=>'owner30', 'email'=>'owner30@owner.com',   'password'=>bcrypt('123123') , 'user_type_id'=>'2', 'created_at'=>date("Y-m-d H:i:s")],
            ['id'=>5, 'name'=>'admin',   'email'=>'admin@admin.com',     'password'=>bcrypt('123123') , 'user_type_id'=>'3', 'created_at'=>date("Y-m-d H:i:s")],

        ];
        User::insert($Records);
    }
}
