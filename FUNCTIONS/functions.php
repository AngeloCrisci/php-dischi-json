<?php 

$json_path = __DIR__ . '../JSON/dischi.json';

$json_data = file_get_contents($json_path);

$discs = json_decode($json_data, true);

header('Content-Tyep: applications/json');

echo $discs;

?>