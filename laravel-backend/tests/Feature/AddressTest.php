<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Address;

class AddressTest extends TestCase
{
    use Refreshdatabase;

    public function test_insert_address(){
        //login the fake created user
        $data = $this->login_user();
        //fake country
        // $country = Country::factory()->create([
        //     'name' => 'Iran',
        //      'slug' => 'iran'
        //      ]);
        // //fake city
        // $city = City::factory()->forCountry([
        //         'name' => 'Iran',
        //         'slug' => 'iran',
        //          ])->create([
        //         'name' => 'Tehran',
        //         'slug' => 'tehran'
        //         ]);

        $address = Address::factory()->hasCountry(1)->hasCity(1)->forUser(['user_id' => $data['user']->id ]);
        
        //dd($user);
        $this->assertAuthenticated();


    }

    public function login_user(){
        $data['user'] = User::factory()->create();
        

        $data['response'] = $this->post('/login', [
            'email' => $data['user']->email,
            'password' => 'password',
        ]);
        return $data;
        
    }
}
