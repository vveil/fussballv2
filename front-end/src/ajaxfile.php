<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));

$request = $data->request;

// add person
if ($request == 2) {

    $fname = $data->vorname;
    $lname = $data->nachname;
    $phone = $data->telefon;
    $plz = $data->plz;
    $city = $data->ort;
    $address = $data->adresse;
    $eID = $data->eID;

    $sql = "INSERT INTO `teilnehmer`(name, vorname, telefonnummer, plz, ort, adresse, logTime, eID) VALUES(\"$lname\", \"$fname\", \"$phone\", \"$plz\", \"$city\", \"$address\", CURRENT_TIMESTAMP, \"$eID\")";

    mysqli_query($link, $sql);

    exit;
}

// if ($request == 4) {

//     $passwordHash = password_hash($data->password, PASSWORD_DEFAULT);

//     $sql = "UPDATE `verein` SET `password` = \"$passwordHash\" WHERE `verein`.`username` = \"$data->username\"";
//     if(mysqli_query($link, $sql)){
//         echo "Request was successful \n";
//     } else {
//         echo "Requst failed! \n";
//     }

//     exit;
// }

// verify login
// if ($request == 5) { 

//     $sql = "SELECT `password` FROM `verein` WHERE `verein`.`username` = \"$data->username\"";
//     $query = mysqli_query($link, $sql);

//     if(!$query){
//         echo "Something went wrong fetching the hash from the database \n";
//     }

//     $queryArray = mysqli_fetch_array($query);

//     echo "Hash: ". $queryArray['password'] . "\n";

//     if(password_verify($data->password, $queryArray['password'])){
//         echo "Log In Successful \n";
//     } else {
//         echo "Log In Failed For Some Reason \n";
//         echo "Hash: " . $queryArray['password'] . "\n";
//     }

//     exit;
// }

?>