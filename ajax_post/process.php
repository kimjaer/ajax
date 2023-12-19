<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tmpArray = array($_POST["named"],$_POST["subject"]); 
    // 데이터를 누적시켜서 한방에 보내버려
    // 문자로 보냈을 때 아주 문제 없었음.
    // 

    echo $tmpArray;
}
?>
