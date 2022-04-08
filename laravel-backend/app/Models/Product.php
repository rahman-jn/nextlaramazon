<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'slug',
        'cat_id',
        'image',
        'isFeatured',
        'featuredImage',
        'price',
        'brand',
        'rating',
        'numReviews',
        'countInStock',
        'description',
    ];


    public function OrderProduct(){
        return $this->belongsTo(OrderProduct::Class);
    }
}
