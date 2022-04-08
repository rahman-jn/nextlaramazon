<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Country;
use App\Models\City;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => function(){
                return User::factory()->create()->id;
            },
            
            'fullname' =>  $this->faker->name(),

            'country_id' => function(){
                return Country::factory()->create()->id;
            },
            'city_id' => function(){
                return City::factory()->create()->id;
            },
            'postal_code' => $this->faker->text(10),
            'address' => $this->faker->text(30)
        ];
    }
}
