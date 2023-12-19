function submitForm() {
    var formData = $('#myForm').serialize();// serialize는 폼태그만 할 수 있음. input에 쓴 데이터를 패킹화 시킴.

    $.ajax({
        type: 'POST', // 용량이 큰건 post, 작은건 get(보안취약). type은 4개 있는데 post랑 get을 많이 씀.
        url: 'process.php',
        data: formData, // 위에 있는 진짜 데이터를 말함
        datatype : 'text', // html인지 php인지 js인지 알려주는 거..?
        success: function (response) {
            $('#result').html(response);
        },
        error: function (xhr, ajaxSettings, thrownError) {
            alert(xhr, ajaxSettings, thrownError);
        },
    });
}
