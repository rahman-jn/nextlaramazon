<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class FakeProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Product::factory()->count(4)->create(); 
        // $faker = \Faker\Factory::Create();
        // for($i = 0; $i <= 4; $i++){
        //     \App\Models\Product::create([
        //         'name' => $faker->name,
        //         'slug' => Str::slug($faker->slug, '-'),
        //         'cat_id' => $faker->numberBetween($min = 1, $max = 10),
        //         'image' => $faker->image,
        //         'isFeatured' => $faker->boolean,
        //         'featuredImage' => $faker->image,
        //         'price' => $faker->numerify('###.##'),
        //         'brand' => $faker->randomElement(['Nike', 'Adidas', 'Majid', 'Spolsh' ]),
        //         'rating' => $faker->randomFloat(2, 0, 1),
        //         'numReviews' => $faker->randomNumber(),
        //         'countInStock' => $faker->numberBetween($min = 0, $max = 10),
        //         'description' => $faker->text,
        //     ]);
        // }
        //
    }
}
