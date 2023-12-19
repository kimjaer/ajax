<?php
// POST : 보안강함, 용량큼
// GET : 보안약함, 용량작음
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 배열로 데이터받기
    $dataArr = array( // 데이터를 순서대로 배열로 누적시키기
        $_POST["named"],$_POST["age"],$_POST["gender"],$_POST["yourcolor"]
    );  

    $jsonData = json_encode($dataArr); // php 배열을 json으로 파싱

    echo $jsonData;
   
    // 하나의 변수로 묶어서 데이터받기
    /* $data = "이름 : ".$_POST["named"]."나이 : ".$_POST["age"];
    echo "제출정보 : " . $data . "<br>"; */

    // 변수여러개로 데이터 출력
   /*  $namedData = $_POST["named"];
    $ageData = $_POST["age"];
    $genderData = $_POST["gender"];
    $yourcolorData = $_POST["yourcolor"];
    echo "이름 : " . $namedData . "<br>";
    echo "나이 : " . $ageData . "<br>";
    echo "성별 : " . $genderData . "<br>";
    echo "선호색상 : " . $yourcolorData . "<br>"; */

    
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $namedData = $_GET["named"];
    $ageData = $_GET["age"];
    $genderData = $_GET["gender"];
    $yourcolorData = $_GET["yourcolor"];
 
    echo "이름 : " . $namedData . "<br>";
    echo "나이 : " . $ageData . "<br>";
    echo "성별 : " . $genderData . "<br>";
    echo "선호색상 : " . $yourcolorData . "<br>";
}
?>
