function submitForm() {
    /* serialize() : 
    - 제이쿼리 메서드
    - form태그에서씀. 폼(form) 요소의 데이터를 URL-encoded 문자열로 직렬화. 이거 안하면 수동으로 해야된다고함.. */
    var formData = $('#myForm').serialize(); 

    $.ajax({
        type: 'POST',
        url: './process.php', // process.php 로 파일보내줌
        data: formData, // formData : 위에서 선언한 데이터를 보냄.
        // datatype: 'text', // 받을 데이터 타입. 기본적으로 string으로 받는다!
        success: function (response) {
            // json_encode로 json모양 text로 변환받은 데이터를 json 타입으로 변환
            var jsonPasing = JSON.parse(response); // object가 됨. 타입은 array.
            var printData = `
            이름 : ${jsonPasing[0]} 
            나이 : ${jsonPasing[1]}
            성별 : ${jsonPasing[2]}
            선호색상 : ${jsonPasing[3]}
            `
            $('#result').html(printData);

            /* 분명 php에선 Array로 보냈는데 js에선 string으로 받아버림. Array라는 문자를 받은걸로 인식함.
            변환작업이 필요! -> JSON으로 파싱 
            왜 js가 아니라 json으로 할까? */
            console.log(formData, typeof formData) 
            console.log(response, typeof response) 
            console.log(jsonPasing, typeof jsonPasing) 
        },
        error: function (xhr, ajaxSettings, thrownError) {
        alert(xhr, ajaxSettings, thrownError);
        },
    });
}
