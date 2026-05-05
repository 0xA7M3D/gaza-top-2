<?php

// تسمح لجميع المواقع باستخدام هذا الـ API 
header("Access-Control-Allow-Origin: *");
// لدعم البيانات بصيغة json وايضا دعم اللغه العربيه فيها
header("Content-Type: application/json; charset=UTF-8");
// لتحديد طرق الوصول لـ API
header("Access-Control-Allow-Methods: *");
// المده التي يتم فيها تخزين النتائج عند طلب الاختبار المبدئي مؤقتا
header("Access-Control-Max-Age: 3600");
// تعطي صلاحيه للمتصفح لتبادل البيانات بدون اخطاء
header("Access-Control-Allow-Headers: *");
include "conn.php";
// ini_set('display_errors', 1);
// error_reporting(E_ALL);


$data = file_get_contents("php://input");
$data = json_decode($data);
// print_r($data);
// echo json_encode([
//     "Status"=> "??",
//     "Data"  => $data, 
// ]);
if (isset($data->name) && isset($data->user) && isset($data->pass)) {
    $error = [];

    $id = 0;
    $name = $data->name;
    $user = $data->user;
    $pass = $data->pass;
    $active = "false";

    // التحقق من أن الحقول غير فارغة
    if (empty($name)) $error[] = "Name is empty ";
    if (empty($user)) $error[] = "User is empty ";
    if (empty($pass)) $error[] = "Password is empty ";
    $pass = password_hash($data->pass, PASSWORD_DEFAULT);

    // تحقق هل اسم المستخدم موجود بالفعل
    $check_stmt = $con->prepare("SELECT id FROM users WHERE user = ?");
    $check_stmt->bind_param("s", $user);
    $check_stmt->execute();
    $check_result = $check_stmt->get_result();
    if ($check_result->num_rows > 0) {
        $error[] = "Username already exists";
    }

    if (empty($error)) {
        // إنشاء الحساب باستخدام prepared statement
        $stmt = $con->prepare("INSERT INTO users (id, name, user, pass, active) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("issss", $id, $name, $user, $pass, $active);

        if ($stmt->execute()) {
            echo json_encode(["error" => false, "Errors_content" => "Account created successfully"]);
        } else {
            echo json_encode(["error" => true, "Errors_content" => "Database error"]);
        }
    } else {
        echo json_encode(["error" => true, "Errors_content" => $error]);
    }
}




?>