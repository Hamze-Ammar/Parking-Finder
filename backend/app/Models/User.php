<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Models\History;
use App\Models\Favourite;
use App\Models\UserType;
use App\Models\Reservation;
use App\Models\SearchRequest;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function histories()
    {
        return $this->hasMany(History::class);
    }
    public function favourites()
    {
        return $this->hasMany(Favourite::class);
    }

    public function type()
    {
        return $this->hasOne(UserType::class);
    }

    public function reservations(){
        return $this->hasMany(Reservation::class);
    }

    public function searchRequests(){
        return $this->hasMany(SearchRequest::class);
    }
}