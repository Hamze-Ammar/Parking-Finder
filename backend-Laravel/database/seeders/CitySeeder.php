<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('cities')->delete();

        $LebaneseCities = array(
            array('id' => '1',  'name' => 'Beirut',     'country_id' => '118'),
            array('id' => '2',  'name' => 'Tripoli',    'country_id' => '118'),
            array('id' => '3',  'name' => 'Saida',      'country_id' => '118'),
            array('id' => '4',  'name' => 'Batroun',    'country_id' => '118'),
            array('id' => '5',  'name' => 'Jbeil',      'country_id' => '118'),
            array('id' => '6',  'name' => 'Baalbak',    'country_id' => '118'),
            array('id' => '7',  'name' => 'Tyre',       'country_id' => '118'),
            array('id' => '8',  'name' => 'Akkar',      'country_id' => '118'),
            array('id' => '9',  'name' => 'Jounieh',    'country_id' => '118'),
            array('id' => '10', 'name' => 'Bremmana',   'country_id' => '118')
        );

        DB::table('cities')->insert($LebaneseCities);

    }
}
