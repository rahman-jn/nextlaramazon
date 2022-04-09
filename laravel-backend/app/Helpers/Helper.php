<?php

namespace App\Helpers;

class Helper {

    public  function camelKeys($array)
    {
        $result = [];
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $value = $this->camelKeys($value);
            }
            $result[$this->camelize($key)] = $value;
        }
        return $result;
    }


    public function snakeKeys($array, $delimiter = '_')
    {
        $result = [];
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $value = snake_keys($value, $delimiter);
            }
            $result[snake_case($key, $delimiter)] = $value;
        }
        return $result;
    }

    protected function camelize($input, $separator = '_')
    {
        return lcfirst(str_replace($separator, '', ucwords($input, $separator)));
    }
}
?>