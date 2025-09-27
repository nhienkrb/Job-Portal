<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerifyAccountMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */

    public $user, $verifyUrl;

    public function __construct($user)
    {
        $this->user = $user;
        $this->verifyUrl = url("/api/v1/auth/verify/{$user->verify_token}");
    }


    public function build()
    {
        return $this->subject('Xác nhận tài khoản của bạn')
            ->view('emails.verify');
    }
}
