<?php

namespace App\Services;

use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;

/**
 * Class OrderService
 * @package App\Services
 */
class OrderService
{
    //Store order products in ordr_product table
    public function storeOrderProducts(int $orderId,array $cartItems){
        //$itemsIds = collect($cartItems)->pluck('id');
        foreach($cartItems as $item){
            //return intval($item['quantity']);
            try{
                $itemPrice = Product::whereId($item['id'])->first(['price'])->price;
                $orderProduct = OrderProduct::create([
                    'order_id' =>$orderId,
                    'product_id' =>$item['id'],
                    'quantity' => intval($item['quantity']),
                    'price' => $itemPrice
                    ]);
            }
            catch(Exception $e){
                Log::channel('models')->error('Error when trying to insert order products',
                [$orderId, $item, $e->getMessage]);
                return response()->json($e, 500);
            }
        }
        
        return true;
    }

}
