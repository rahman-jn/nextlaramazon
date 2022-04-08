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
        $address = Address::whereId($addressId)->first();
        $country = Country::whereId($address->country_id)->first();
        $city = City::whereId($address->city_id)->first();
        $address = $country.', '.$city.', '.$address->address.', '.$address->postal_code;

        return collect(['address' => $address]);
    }

}
