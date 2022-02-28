<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
                'name' => $this->faker->name,
                'slug' => Str::slug($this->faker->slug, '-'),
                'cat_id' => $this->faker->numberBetween($min = 1, $max = 10),
                'image' => $this->faker->image,
                'isFeatured' => $this->faker->boolean,
                'featuredImage' => $this->faker->image,
                'price' => $this->faker->numerify('###.##'),
                'brand' => $this->faker->randomElement(['Nike', 'Adidas', 'Majid', 'Spolsh' ]),
                'rating' => $this->faker->randomFloat(2, 0, 10),
                'numReviews' => $this->faker->randomDigit(),
                'countInStock' => $this->faker->numberBetween($min = 0, $max = 10),
                'description' => $this->faker->text,
        ];
    }
}
