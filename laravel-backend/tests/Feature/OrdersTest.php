<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Order;
use App\Models\User;

class OrdersTest extends TestCase
{
    use Refreshdatabase;

    public function insert_new_order(){

        $order = Order::factory()->create();
        
        if($this->login_user('rahman.j88@gmail.com', 'password')){
        
        $this->assertNotNull($order);
        }
        else throw new Exception("Error Processing Request", 1);
    }

    //Assert that valid inputs inserted
    public function test_error_if_not_valid_data(){
        
        // $order = Order::factory()->create([
        //     'items_price' => 20,
        //     'payment_method' => 'paypal'
        //     ]);
        //if($this->login_user('rahman.j88@gmail.com', 'password')){
            $user =  User::factory()->create([
                'email' => 'rahman.j88@gmail.com',
                'password' => bcrypt('password')
                ]);

            //$login = $this->login_user('rahman.j88@gmail.com', 'password');
        
            $response = $this->actingAs($user)
            ->post('/api/orders',[
                'uer_id' => 1,
                'address_id' => 1,
                'payment_method' => 'paypal',
                'items_price' => 100.5,
                'shipping_price' => 2,
                'tax_price' => 6.3,
                'total_price' => 107.1,
                'status' => 1
            ]);

            $response->assertStatus(302);
            //}
            //else throw new Exception("Error Processing Request", 1);
    }

    protected function login_user($email, $password){
        $response = $this->post('/login', [
            'email' => $email,
            'password' => $password,
        ]);

        return $this->assertAuthenticated();
    }
    
}
