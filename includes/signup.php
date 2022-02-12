<?php
session_start();
require("db.php");
$name = mysqli_real_escape_string($con,$_POST['name']);
$email = mysqli_real_escape_string($con,$_POST['email']);
$phoneno = mysqli_real_escape_string($con,$_POST['phoneno']);
$password = md5(mysqli_real_escape_string($con,$_POST['password']));

insert($con, $name, $email, $phoneno, $password);


function insert($con, $name, $email, $phoneno, $password){
    $query = mysqli_query($con,"INSERT INTO `users` (`id`, `name`, `email`, `phoneno`, `password`) VALUES (NULL, '{$name}', '{$email}', '{$phoneno}', '{$password}');");
    if($query){
        $_SESSION['RESULT'] = "Account Created Successfully!";
        echo "Account Created Successfully!";
    }
    else{
        $_SESSION['RESULT'] = "Account Not Created!";
        echo "Account Not Created!";
    }
}




?>