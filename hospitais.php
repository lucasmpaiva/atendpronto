<?php

$user = 'u985584107_atend';

$password = 'atendpronto';

$db = 'u985584107_atend';

$host = 'mysql.hostinger.com.br';



$mysqli = new mysqli("$host", $user, $password, $db);



$result = $mysqli->query('SELECT * FROM Hospital');


$hospitais = [];
foreach ($result as $hospital) {
	
$hospital['nome'] = utf8_encode($hospital['nome']);
	
$hospitais[] = $hospital;
}


echo json_encode(['hospitais' => $hospitais]);