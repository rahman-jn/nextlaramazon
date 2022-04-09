<?php

namespace App\Services;

use Illuminate\Support\Collection;

use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use App\Services\AddressService;
use App\Helpers\Constant;

/**
 * Class OrderService
 * @package App\Services
 */
class OrderService extends AddressService
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

        //Rwadable order status
        public function orderStatus(int $status) :Collection{
            // statuses names
            $statuses = Constant::ORDER_STATUS;
            //$statuses = $statuses->ORDER_STATUS;
            switch($status){
                case 0:
                    $statusString = $statuses['UNPAYED'];
                case 1:
                    $statusString = $statuses['PAYED'];
                case 2:
                    $statusString = $statuses['DELIVERED'];
                case 3:
                    $statusString = $statuses['SHIPPED'];
                case 4:
                    $statusString = $statuses['REJECTED'];
                default:
                    $statusString = $statuses['UNPAYED'];
            }
            return collect(['status' => $statusString]);
        }

        //Get order's products name
        public function orderProducts(int $orderId):Collection{
            $orderProducts = OrderProduct::where(['order_id' => $orderId])->get();
            foreach($orderProducts as $orderProduct){
                $product = Product::whereId($orderProduct->id)->first();
                $products[] = array(
                                    'id' => $product->id,
                                    'slug' => $product->slug,
                                    'name' => $product->name,
                                    'image' => $product->image,
                                    'quantity' => $orderProduct->quantity,
                                    'price' => $orderProduct->price
                                );
            }

            return collect(['orderItems' => collect($products)]);
        }

}
