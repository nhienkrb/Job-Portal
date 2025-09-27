<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;

class EmailService
{
    /**
     * Gửi email chung
     *
     * @param string $to
     * @param \Illuminate\Mail\Mailable $mailable
     * @return void
     */
    public function send(string $to, $mailable)
    {
        Mail::to($to)->queue($mailable);
    }
}
