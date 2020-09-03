<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$return = [];
$data=[];
try {
    $json = json_decode($_POST);
} catch (Exception $e) {
    $message = $e;
}
if ($return['status']) {
    http_response_code(200);
    echo json_encode(
        array(
            "message" => "Successful",
            "data" => $data
        ));
} else {
    http_response_code(401);
    echo json_encode(array("message" => $message));
}


exit();

