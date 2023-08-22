// ---------------- calendar --------------------
var minDt = "2023-08-15";
var maxDt = "2023-09-18";

$(function() {

    function addPrice() {
        const td = document.querySelectorAll(".ui-datepicker td");
        td.forEach((e,i) => {
            let cls = e.getAttribute("data-month");
            if(true) {
                e.insertAdjacentHTML("beforeend", `<p class='dayPrice'>47만</p>`)
            }
        });
    }

    $( ".calendar" ).datepicker({ 
        dateFormat: 'yy-mm-dd',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        minDate: minDt,
        maxDate : maxDt,
        // beforeShowDay: function(date){ // 요일 별 선택 제한
        //     var day = date.getDay();
        //     return [(day != 0 && day != 6)];
        // },
        onSelect: function() { // 선택한 날짜 데이터 형식 뽑기
            let date = $.datepicker.formatDate("yymmdd",$(".calendar").datepicker("getDate")); 
            console.log(date);
        },
    });

    // addPrice();
    
});



// ---------------- 숫자 컨트롤러 -----------------------------
var cntShow = document.querySelector(".number");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var cntNum = 0;
var on = false;
var breaker = false;
cntShow.innerHTML = cntNum;


plus.onclick = function () {
    if (on === false) {
        cntNum++;
        if (cntNum <= 10)
        cntShow.innerHTML = cntNum;
        else
            cntNum = 10;
    }
};

minus.onclick = function () {
    if (on === false) {
        cntNum--;
        if (cntNum >= 1)
            cntShow.innerHTML = cntNum;
        else
            cntNum = 1;
    }
};

// ------------- 좋아요 버튼 -------------
const wishBtn = document.querySelector(".wishBtn");
wishBtn.onclick = function() {
    this.classList.toggle("active");
}


// 추가된거 
// ------------ 더보기 버튼 ---------------
const postMore = document.querySelector(".postMore");
const post = document.querySelector(".postCon");

if(post.clientHeight >= 580) {
    postMore.style.display = "block";

    postMore.onclick = function() {
        post.classList.toggle("more");
        if(this.innerHTML == "더보기") {
            this.innerHTML = "접기";
        } else {
            this.innerHTML = "더보기";
        }
    }
} else {
    postMore.style.display = "none";
}

