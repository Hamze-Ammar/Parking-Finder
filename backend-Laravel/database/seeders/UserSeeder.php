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
            ['id'=>1, 'name'=>'user',    'email'=>'user@user.com',       'password'=>'$2y$10$WE5tIVBeIvueu3WkVzhGqeERfB2T8WNnH9eOY51ilkvzkWzJRjW6W', 'user_type_id'=>'1'],
            ['id'=>2, 'name'=>'owner10', 'email'=>'owner10@owner.com',   'password'=>'$2y$10$WE5tIVBeIvueu3WkVzhGqeERfB2T8WNnH9eOY51ilkvzkWzJRjW6W', 'user_type_id'=>'2'],
            ['id'=>3, 'name'=>'owner20', 'email'=>'owner20@owner.com',   'password'=>'$2y$10$WE5tIVBeIvueu3WkVzhGqeERfB2T8WNnH9eOY51ilkvzkWzJRjW6W', 'user_type_id'=>'2'],
            ['id'=>4, 'name'=>'owner30', 'email'=>'owner30@owner.com',   'password'=>'$2y$10$WE5tIVBeIvueu3WkVzhGqeERfB2T8WNnH9eOY51ilkvzkWzJRjW6W', 'user_type_id'=>'2'],
            ['id'=>5, 'name'=>'admin',   'email'=>'admin@admin.com',     'password'=>'$2y$10$WE5tIVBeIvueu3WkVzhGqeERfB2T8WNnH9eOY51ilkvzkWzJRjW6W', 'user_type_id'=>'3'],

        ];
        User::insert($Records);
    }
}
