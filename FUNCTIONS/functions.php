<?php 

$json_path = '../JSON/dischi.json';

$json_data = file_get_contents($json_path);


header('Content-Type: application/json');

echo $json_data;

?>