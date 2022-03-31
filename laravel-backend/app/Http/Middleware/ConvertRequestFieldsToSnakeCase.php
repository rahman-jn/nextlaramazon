<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class ConvertRequestFieldsToSnakeCase
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

    public const CASE_SNAKE = 'snake';
    public const CASE_CAMEL = 'camel';


    public function handle(Request $request, Closure $next)
    {
        $requestCount = count($request->all());
        
        $request->replace(
            $this->convert(
                self::CASE_SNAKE,
                $request->all()
            )
        );

        return $next($request);
    }

    public function convert(string $case, $data)
    {
        if (!in_array($case, [self::CASE_CAMEL, self::CASE_SNAKE])) {
            throw new InvalidArgumentException('Case must be either snake or camel');
        }

        if (!is_array($data)) {
            return $data;
        }

        $array = [];

        foreach ($data as $key => $value) {
            $array[Str::{$case}($key)] = is_array($value)
                ? $this->convert($case, $value)
                : $value;
        }

        return $array;

    }
}
