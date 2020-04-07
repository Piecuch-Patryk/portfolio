<?php
if(!isset($_POST['name'])) return header('../index.php');

include_once 'Mail.php';
include_once 'Validation.php';

$validation = new Validation;

if($validation->all()) {
    $mail = new Mail;
    $mail->send();
}else {
    die('false');
}