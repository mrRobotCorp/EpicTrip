

if (window.innerWidth < 768) {
    console.log("check");
    let selecAll = document.querySelector(".selecAll");

    selecAll.insertAdjacentHTML('afterbegin', `
        <span class="locTitle">여행지 선택</span>
    `);
}

// ----------- 날짜 선택 -----------------
$(function () {
    $(".datePick").datepicker({
        dateFormat: 'yy-mm-dd',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });
});

// ---------------  모집인원 ------------------------
function ShowSliderValue(sVal) {
    var obValueView = document.querySelector(".rangeValue");
    obValueView.innerHTML = sVal
}

var RangeSlider = function () {
    var range = $('.teamNum');

    range.on('input', function () {
        ShowSliderValue(this.value);
    });
};

RangeSlider();


// ------------- 업로드 이미지 노출 ----------------
window.onload = function() {

    const fileInput = document.querySelector('#fileInput');
    const fileDisplayArea = document.querySelector('.imgArea');
    const uploadedBtn = document.querySelector('.uploadedBtn');


    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerHTML = "";

                var img = new Image();
                img.src = reader.result;

                fileDisplayArea.appendChild(img);
            }

            reader.readAsDataURL(file);	
        } else {
            fileDisplayArea.innerHTML = "<p class='wrongTxt'>&#128473; 잘못된 이미지 형식입니다 &#128473;</p>"
        }

        uploadedBtn.classList.add("uploaded");
    });

}


