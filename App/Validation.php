<?php

class Validation {
    private $name;
    private $email;
    private $body;

    public function __construct()
    {
        $this->name = $_POST['name'];
        $this->email = $_POST['email'];
        $this->body = $_POST['body'];
    }

    /*
    *   Validate all user inputs.
    *
    *   @return Bool
    */
    public function all() 
    {
        if(!$this->name() || !$this->email() || !$this->body()) return false; else return true;
    }

    /* 
    *   Validate name.
    *
    *   @return Bool
    */
    private function name()
    {
        if(empty($this->name) || !ctype_alpha($this->name)) return false; else return true;
    }

    /* 
    *   Validate email.
    *
    *   @return Bool
    */
    private function email()
    {
        $safety_email = filter_var($this->email, FILTER_SANITIZE_EMAIL);
        if (!filter_var($safety_email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }else{
            $this->email = $safety_email;
            return true;
        }
    }

    /* 
    *   Validate body.
    *
    *   @return Bool
    */
    private function body()
    {
        if (empty($this->body)) return false; else return true;
    }

    /* 
    *   Get requested value.
    *
    *   @param  string  $name
    *   @return string  $value
    */
    public function get($name)
    {
        return $this->$name;
    }

}