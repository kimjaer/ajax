<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = $_POST["data"];
 
    echo "Data received: " . $data;
}
?>
