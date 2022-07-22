<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParkingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parkings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // $table->string('location')->nullable();
            $table->decimal('latitude');
            $table->decimal('longitude');
            $table->integer('opening_hr');
            $table->integer('closing_hr');
            $table->mediumText('description');
            $table->integer('total_slots');
            $table->integer('is_open')->default(1);
            $table->integer('is_full')->default(0);
            $table->integer('is_approved')->default(0);
            $table->foreignId('city_id');
            $table->foreignId('photo_id')->nullable();
            $table->foreignId('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parkings');
    }
}
