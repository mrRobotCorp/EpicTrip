// ---------------- calendar --------------------
var minDt = "2023-08-24";
var maxDt = "2023-09-28";

$(function() {
    $( ".calendar" ).datepicker({ 
        dateFormat: 'yy-mm-dd',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        minDate: minDt,
        maxDate : maxDt,
        onSelect: function() { 
            let date = $.datepicker.formatDate("yymmdd",$(".calendar").datepicker("getDate")); 
            console.log(date);
        }
    });
});

const td = document.querySelectorAll(".ui-datepicker td");

td.forEach((e,i) => {
    e.insertAdjacentHTML("beforeend", `<span>47만</span>`)
})


// ---------------- 숫자 컨트롤러 -----------------------------
var breakTime = document.querySelector(".number");
var breakAdd = document.querySelector(".plus");
var breakSub = document.querySelector(".minus");
var breakLength = 0;
var on = false;
var breaker = false;
breakTime.innerHTML = breakLength;


breakAdd.onclick = function () {
    if (on === false) {
        breakLength++;
        if (breakLength <= 10)
            breakTime.innerHTML = breakLength;
        else
            breakLength = 10;
    }
};

breakSub.onclick = function () {
    if (on === false) {
        breakLength--;
        if (breakLength >= 1)
            breakTime.innerHTML = breakLength;
        else
            breakLength = 1;
    }
};


function Timer(mins, secs) {
    this.mins = mins;
    this.secs = secs;
}

// ------------- 좋아요 버튼 -------------
const wishBtn = document.querySelector(".wishBtn");
wishBtn.onclick = function() {
    this.classList.toggle("active");
}