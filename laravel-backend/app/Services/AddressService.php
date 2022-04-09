<?php

namespace App\Services;
use Illuminate\Support\Collection;

use App\Models\Address;
use App\Models\Country;
use App\Models\City;

/**
 * Class AddressService
 * @package App\Services
 */
class AddressService
{
    public function readableAddress(int $addressId):Collection{
        //die("p".$addressId);
        $address = Address::whereId($addressId)->first();//die(print_r($address));
        $country = Country::whereId($address->country_id)->first();
        $city = City::whereId($address->city_id)->first();
        $address = array('country' => $country->name, 'city' => $city->name,
         'address' =>$address->address, 'postalCode' => $address->postal_code, 'fullName' => $address->fullname);
        return collect(['shippingAddress' => collect($address)]);
    }

}
