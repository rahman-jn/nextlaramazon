<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'fullname',
        'country_id',
        'city_id',
        'address',
        'postal_code',
        'active'
    ];



    public function country(){
        return $this->hasOne(Country::class);
    }

    public function city(){
        return $this->hasOne(City::class);
    }

    public function user(){
        return $this->hasOne(User::class);
    }
}
