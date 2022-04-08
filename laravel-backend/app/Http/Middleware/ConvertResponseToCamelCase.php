<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ConvertResponseToCamelCase
{

    public const CASE_SNAKE = 'snake';
    public const CASE_CAMEL = 'camel';

    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        //if ($response instanceof JsonResponse) {
            $response->setData(
                $this->convert(
                    self::CASE_CAMEL,
                    json_decode($response->content(), true)
                )
            );
        //}
//die(print_r($response));
        return $response;
    }


    public function convert(string $case, $data)
    {//die("P");
        if (!in_array($case, [self::CASE_CAMEL, self::CASE_SNAKE])) {
            throw new InvalidArgumentException('Case must be either snake or camel');
        }

        if (!is_array($data)) {
            return $data;
        }

        $array = [];
        //die(print_r($data));
        foreach ($data as $key => $value) {
            $array[Str::{$case}($key)] = is_array($value)
                ? $this->convert($case, $value)
                : $value;
        }
        //die(print_r(($array)));
        //$array = array_flip($array);
        return $array;

    }
}