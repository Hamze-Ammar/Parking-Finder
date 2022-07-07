<?php

namespace App\Jobs;

use App\Models\Slot;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

// About the queue: go to .env and make sure that 'QUEUE_CONNECTION=database
// php artisan queue:work | Run this command to start a worker

class ResetReservation implements ShouldQueue
{
    // TO add: 'use Batchable,' if needed
    use  Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries =3;

    /**
     * The podcast instance.
     *
     * @var \App\Models\Slot
     */
    public $slot;
 
    /**
     * Create a new job instance.
     *
     * @param  App\Models\Slot  $slot
     * @return void
     */
    public function __construct(Slot $slot)
    {
        $this->slot = $slot;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $data = json_decode($this->slot);

        $slot = Slot::find($data->id);
        $slot->is_reserved = '0';
        $slot->save();

    }
}
