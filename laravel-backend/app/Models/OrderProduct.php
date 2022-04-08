<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    use HasFactory;
    protected $table = 'order_products';

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price'
    ];

    public function order(){
        return $this->hasOne(Order::Class);
    }

    public function product(){
        return $this->hasMany(Product::Class);
    }
}
