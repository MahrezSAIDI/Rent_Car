<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rideeasy"; 

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT id, category, img_src, car_name, transmission, energy, prix, sieges, portes FROM voiture"; 
$result = $conn->query($sql);

$cars = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $cars[] = $row;
    }
}


echo json_encode($cars);


$conn->close();
?>