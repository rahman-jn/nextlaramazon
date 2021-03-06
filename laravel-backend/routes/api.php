<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderProductController;
use App\Http\Controllers\AddressController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [ProductController::class, 'index']);
Route::get('/product/{slug}', [ProductController::class, 'show']);

Route::get('/country/{slug}', [CountryController::class, 'show']);

Route::get('/city/{slug}', [CityController::class, 'show']);

Route::middleware(['camelToSnake'])->apiResource('orders', OrderController::class);

// Route::apiResource('orderProducts', OrderProductController::class);

Route::apiResources([
    'orderProducts' => OrderProductController::class,
    'address' => AddressController::class,
    'orderProducts' => OrderProductController::class
    ]);

