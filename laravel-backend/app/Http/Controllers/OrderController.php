<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\OrderRequest;
use Notification;
use App\Notifications\OrderNotification;
use App\Services\OrderService;
use App\Models\Order;


class OrderController extends Controller
{
    private $oredrService;

    public function __construct(OrderService $orderService){
        $this->orderService = $orderService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderRequest $request)
    {
        //This method has camelCase to SnakeCase middleware
        try{
            //UserId doesn't sent from request.
            //In this line userId added to request parameters.
            $requestFields =array_merge(['user_id' => Auth::id()], $request->all());
            //return $requestFields;
            $storedOrder = Order::create($requestFields);

            //In caring of SOLID principles inserting of order products implemented in service class
            $orderProductsInsertion = $this->orderService->storeOrderProducts($storedOrder->id, $request->all()['cart_items']);
            return $orderProductsInsertion;
            //Send order confirmation email
            //Notification::send(Auth::user(), new OrderNotification($storedOrder));
            return $storedOrder->id;
        }
        catch(Exception $e){
            Log::channel('models')->error('Error when trying to insert new order',
             [Auth::id(), $e->getMessage]);
             return response()->json($e, 500);
        }
        //return back()->with('success', 'order crreated');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
