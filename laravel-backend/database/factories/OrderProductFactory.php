<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Order;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class OrderProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $order = Order::factory()->create();
        $product = Product::factory()->create();

        return [
            'order_id' => $order->id,
            'product_id' => $product->id,
            'price' => $this->faker->randomFloat(0,2,10),
        ];
    }
}
