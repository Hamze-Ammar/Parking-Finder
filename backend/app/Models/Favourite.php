<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Parking;


class Favourite extends Model
{
    use HasFactory;

    public function parking()
    {
        return $this->belongsTo(Parking::class);
    }
}
