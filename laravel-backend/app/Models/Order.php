<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'userId',
        'addressId',
        'paymentMethod',
        'itemsPrice',
        'shippingPrice',
        'taxPrice',
        'totalPrice',
        'status'
    ];

    public function user(){
        return $this->hasOne(User::class);
    }

    public function address(){
        $this->hasOne(Address::one);
    }
}
