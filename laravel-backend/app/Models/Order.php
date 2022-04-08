<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'address_id',
        'payment_method',
        'items_price',
        'shipping_price',
        'tax_price',
        'total_price',
        'status'
    ];



    public function user(){
        return $this->hasOne(User::class);
    }

    public function address(){
        $this->hasOne(Address::one);
    }

    public function orderProducts(){
        $this->belongsTo(OrderProduct::class);
    }
}
