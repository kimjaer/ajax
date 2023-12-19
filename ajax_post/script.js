function submitForm() {
    var formData = $('#myForm').serialize();// serialize는 폼태그만 할 수 있음. input에 쓴 데이터를 패킹화 시킴.

    $.ajax({
        type: 'POST', // 용량이 큰건 post, 작은건 get(보안취약). type은 4개 있는데 post랑 get을 많이 씀.
        url: 'process.php',
        data: formData, // 위에 있는 진짜 데이터를 말함
        //datatype : 'text',  // text 지워도 text로 옴
        success: function (r) {
            console.log(r, typeof r);
            // 꼭 문자로 받게 됨!!!!!!!!!!!!!!!!
            // 비동기 통신
            // evel 함수 (예전에 썼던 함수 보안이 취약해서 안 씀.)
            // 문자로 전송받은 데이터를 자바스크립트에서 써먹도록
            // json화 해야만 함.(js가 아니라 왜 json? → 나도 몰라 ㅅㅂ)

            // 응답 결과는 Array 문자 전송 받아짐
            // $('#result').html(r);


        },
        error: function (xhr, ajaxSettings, thrownError) {
            alert(xhr, ajaxSettings, thrownError);
        },
    });
}
