<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parking extends Model
{
    use HasFactory;

    public function slots()
    {
        return $this->hasMany(Slot::class);
    }

    public function availableSlots()
    {
        return $this->hasMany(Slot::class)
                        ->where('is_available', '1');
    }
}
