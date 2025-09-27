<?php

namespace App\Helpers;

class ApiResponse
{
    public static function success($data = null, $message = "Success", $code = 200)
    {
        return response()->json([
            "success" => true,
            "message" => $message,
            "data" => $data
        ], $code);
    }

    public static function error($message = "Error", $code = 400, $data = null)
    {
        return response()->json([
            "success" => false,
            "message" => $message,
            "data" => $data
        ], $code);
    }

    public static function notFound($message = "Not found", $data = null)
    {
        return self::error($message, 404, $data);
    }

    public static function unauthorized($message = "Unauthorized", $data = null)
    {
        return self::error($message, 401, $data);
    }
}