<?php

namespace App\Helpers;

class Constant {

    public const PAYMENT_METHOD = [
        'PAYPAL' => 'paypal',
        'CASH' => 'cash',
        'STRIPE' => 'stripe'
    ];

    public const ORDER_STATUS = [
        'UNPAYED' => 'notPayed',
        'PAYED' => 'payed',
        'DELIVERED' => 'delivered',
        'SHIPPED' => 'shipped',
        'REJECTED' => 'rejected'
    ];
}
?>