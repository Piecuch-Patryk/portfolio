<?php
include('Validation.php');

class Mail {
    private $headers;
    private $message;
    private $to = 'patrykowo@gmail.com';
    private $subject = 'Portfolio - contact form';

    public function __construct()
    {
        $validation = new Validation;
        $this->message = $validation->get('body');
        $this->headers = 'From: ' . $validation->get('email') . "\r\n" . 'Reply-To: ' . $validation->get('email');
    }
    
    public function send()
    {
        mail($this->to, $this->subject, $this->message, $this->headers);
    }
}