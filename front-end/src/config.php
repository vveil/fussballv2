<?php
$host_name = 'db5000707045.hosting-data.io';
$database = 'dbs649825';
$user_name = 'dbu831686';
$password = 'Eventtracker1.';

$link = mysqli_connect($host_name, $user_name, $password, $database);

if (!$link) {
    exit;
}

?>