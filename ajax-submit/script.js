function registerMember() {
    var formData = $('#memberForm').serialize();
    console.log(formData, typeof formData);
    $.ajax({
        type: 'POST',
        url: './process.php',
        data: formData, // post의 변수 data로 넘김 문자형으로 php에 전송
        success: function (response) {
            // var jsonPasing = JSON.parse(response);
        },
        error: function (xhr, ajaxSettings, thrownError) {
            alert(xhr, ajaxSettings, thrownError);
        },
    });
}