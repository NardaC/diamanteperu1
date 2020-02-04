<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	//set response code - 200 OK

	http_response_code(200);
	
	$subject = "Suscripción";
	$to = "narda@henribarrett.com";
	$from = $_POST['email'];

	//data

	$msg = $_POST['phone'] . $_POST['message'];

	//Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <' . $from . '>";
	$headers.= "to: <' . $to . '>";
	mail($to, $subject, $msg, $headers);

	//echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Ups, Hubo un error"]);
	}

?>






