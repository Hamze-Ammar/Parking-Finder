<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Parking;
use App\Models\History;


class Slot extends Model
{
    use HasFactory;

    public function parking()
    {
        return $this->belongsTo(Parking::class);
    }

    public function histories()
    {
        return $this->hasMany(History::class);
    }
}
