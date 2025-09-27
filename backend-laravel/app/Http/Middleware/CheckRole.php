<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle(Request $request, Closure $next, $role)
    {
        $user = auth()->user();
        if (!$user || $user->role !== $role) {
            return response()->json([
                'success' => false,
                'message' => "Forbidden. Only $role allowed."
            ], 403);
        }
        return $next($request);
    }
}
