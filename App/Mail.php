<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';
include 'Validation.php';
include 'config.php';

class Mail {
    private $email;
    private $name;
    private $message;

    public function __construct()
    {
        $validation = new Validation;
        $this->name = $validation->get('name');
        $this->email = $validation->get('email');
        $this->message = $validation->get('body');
    }
    
    public function send()
    {
        $mail = new PHPMailer();

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = username;                               // SMTP username
            $mail->Password   = password;                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom($this->email, 'Portfolio');
            $mail->addAddress(username, 'Admin');                       // Add a recipient
            $mail->addReplyTo($this->email, $this->name);

            // Content
            $mail->isHTML(false);                                       // Set email format to HTML
            $mail->Subject = 'Portfolio - contact form';
            $mail->Body = $this->message;
            $mail->AltBody = $this->message;

            $mail->send();
            echo 'true';
        } catch (Exception $e) {
            echo 'false';
        }
    }
}