<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\DB;
use App\Models\Product;

// Test database connection


class ProductTest extends TestCase
{
    //use RefreshDatabase;


     /**
  * @test
  */

    public function see_product_detail(){
        $product = Product::factory()->count(5)->create([
                    "name" => "Solon Streich",
                    'slug' => 'ducimus-non-deleniti-odit-quidem2'
                    ]);

        $response = $this->get('/api/product/ducimus-non-deleniti-odit-quidem2');
        $response->assertJson([
            "name" => "Solon Streich",
        ]);
    }


    // public function test_see_all_products(){
    //     $response = $this->get('/api/products');
        
    //     $response->seeJsonStructure([
    //                         '*' => ['id','name', 'slug', 'cat_id', 'image', 'isFeatured'
    //                         ,'featuredImage','price', 'brand','ratinga', 'numReviews','countInStock'
    //                         ]
    //                     ]);
    // }
    
}
