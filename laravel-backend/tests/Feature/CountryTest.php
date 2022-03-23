<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Country;
 

class CountryTest extends TestCase
{
    //use RefreshDatabase;

    public function test_exist_country(){

        $iran = Country::factory()->create([
            'name' => 'Iran',
             'slug' => 'iran'
             ]);

        $response = $this->get('/api/country/iran');
        $response->assertJson([
                    'name' => 'Iran',
            ]);


        //$country = Country::factory()->count(4)->create();
        

    }
}
