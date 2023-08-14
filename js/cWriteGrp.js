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


// ------------------ modal ---------------------
const modal = document.querySelector(".modalBg");
const clsBtn = document.querySelector(".cls");
const locAdd = document.querySelectorAll(".locAdd");

function showModal() {
    modal.classList.add("active")
}

function clsModal() {
    modal.classList.remove("active");
}

locAdd.forEach((e) => {
    e.onclick = function() {
        showModal();
    };
});

clsBtn.onclick = function() {
    clsModal();
};

