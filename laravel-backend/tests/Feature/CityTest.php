<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\City;

class CityTest extends TestCase
{
    use RefreshDatabase;

    public function test_exist_city(){

        $data = City::factory()->forCountry([
            'name' => 'Iran',
            'slug' => 'iran',
             ])->create([
            'name' => 'Tehran',
            'slug' => 'tehran'
            ]);
        //dd($data);
        $response = $this->get('/api/city/tehran');

        $response->assertJson([
            'name' => 'Tehran'
            ]);
    }
}
