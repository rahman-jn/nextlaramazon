<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\OrderProduct;

class OrderProductTest extends TestCase
{
    use RefreshDatabase;

    public function test_insert_order_product(){
        
        $orderProduct = OrderProduct::factory()->create();
        $this->assertNotNull($orderProduct);
    }
}
