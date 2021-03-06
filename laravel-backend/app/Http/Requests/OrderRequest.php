<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\Constant;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class OrderRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        //return true;
        if(!Auth::check())
            return false;
        
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //'user_id' => 'required|integer',
            'address_id' => 'required|integer',
            'items_price' => 'required|numeric',
            'shipping_price' => 'sometimes|numeric',
            //'payment_method' => Rule::in(Constant::PAYMENT_METHOD),
            'tax_price' => 'numeric',
            'total_Price' => 'numeric',
            // 'status' => 'numeric'
        ];
    }
}
