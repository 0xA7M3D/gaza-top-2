<?php
// header("Access-Control-Allow-Origin: ");
// Ok Cookies
header("Access-Control-Allow-Origin: *  ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");
// Cookies 
header("Access-Control-Allow-Credentials: true");

include "conn.php";


if(!empty($_POST)){
    $name = filter_var($_POST['name'], FILTER_DEFAULT);
    $pass = filter_var($_POST['pass'], FILTER_DEFAULT);
    $error = [];
    $data = [];

    if(empty($name)){
        $error[]="error_name";
    }
    else if(empty($pass)){
        $error[]="error_pass";
    }

    if(empty($error)){
        $query = "SELECT * FROM users WHERE name='$name' AND pass='$pass'";
        $my_query = mysqli_query($con,$query);
        echo 'Ahmed';
        if($my_query){
            while($que = mysqli_fetch_array($my_query)){
                $data[] = $que;
            }
            echo 'My Query : ' . $my_query;
        }else{
            $data[] = 'User Not Defind!';
            echo 'User Not Defind!';
        }
    }




    echo json_encode($data, JSON_UNESCAPED_UNICODE);
}




?>
