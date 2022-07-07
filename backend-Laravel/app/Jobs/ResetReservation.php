<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ResetReservation implements ShouldQueue
{
    // TO add: 'use Batchable,' if needed
    use  Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries =3;
    // protected int $init_parameter;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(int $init_parameter=110)
    {
        $this->id = $init_parameter;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // throw new \Exception('Failed!');
        //
        echo "Hello Jobi";
        // $test =  $this->id;
        echo "h";
    }
}
