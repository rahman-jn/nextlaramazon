<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Address;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $user =  User::factory()->create([
            'email' => 'rahman.j88@gmail.com',
            'password' => bcrypt('password')
            ]);
        $address = Address::factory()->create(['user_id' => $user->id]);
        
        return [
            'user_id' => $user->id,
            'address_id' => $address->id,
            'payment_method' => $this->faker->randomElement(['paypal', 'stripe', 'cash']),
            'items_price' => $this->faker->randomFloat(2,0,10),
            'shipping_price' => $this->faker->randomFloat(2,0,10),
            'tax_price' => $this->faker->numerify('##.##'),
            'total_price' => $this->faker->randomFloat(2,0,10),
            'status' => $this->faker->numberBetween(1,5),

        ];
    }
}
