// ----- slider ------
$(document).ready(function(){
    $('.slider').slick({
        dots: true, 
        arrow: true,
        infinite: true, 
        autoplay: true,
        autoplaySpeed : 1800,
        slidesToShow: 1,
        slidesToScroll: 1, 
    });
});


function mobileTag() {
    let bTxt = document.querySelector(".mainCon p");

    bTxt.innerHTML = `일상을 벗어나 <span class="boldTxt">특별한 여행</span>을 계획하고 싶은<br> 이들을 위한 플랫폼<br>여행에 동행을 구하거나 일정을 공유할 수 있으며, 다양한 여행 상품을 경험해보세요.`
}

if(window.innerWidth < 768 ) {
    mobileTag();       
}

// window.onresize = function(){
// }



// ---------------- 여행 일정 부분 ------------------------------
function initMap() {

    var latLng = new google.maps.LatLng(37.5115557, 127.0595261);
    
    const map = new google.maps.Map(document.querySelector(".schMap01"), {
        center: latLng,
        zoom: 10,
        disableDefaultUI: true,
    });
    
    // ---------- marker 표시 ------------
    const schLoc = [
        { label: "1", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261 },
        { label: "2", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
    ];
    schLoc.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map,
        });
    })
    
    
    
    
    // -------------------------- 예시 추가 맵 ---------------------------------------
    var loc02 = new google.maps.LatLng(37.5454148, 127.2237176);
    const map02 = new google.maps.Map(document.querySelector(".schMap02"), {
        center: loc02,
        zoom: 10,
        disableDefaultUI: true,
    });
    
    const mLoc02 = [
        { label: "1", name: "하남 스타필드", lat: 37.5454148, lng: 127.2237176 },
        { label: "2", name: "하남 검단산역", lat: 37.539827, lng: 127.2231 },
        { label: "3", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
    ];
    
    mLoc02.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map02,
        });
    })
    
    
    
    };
    
    window.initMap = initMap;
    
    
    
    // -------------- day 별 장소 리스트 보이기 ------------------
    const day = document.querySelectorAll(".day");
    const dayLoc = document.querySelectorAll(".locList ul");
    
    function locListShow(e) {
        day[e].onclick = function () {
            if (dayLoc[e].innerText != "") {
    
                if (dayLoc[e].getAttribute('class') != 'active') {
                    for (var i = 0; i < dayLoc.length; i++) {
                        dayLoc[i].removeAttribute('class');
                        day[i].classList.remove('active');
                    }
                    dayLoc[e].setAttribute('class', 'active');
                    day[e].classList.add('active');
                } else {
                    dayLoc[e].removeAttribute('class');
                    day[e].classList.remove('active');
                }
    
            } else {
                dayLoc[e].innerHTML = "<li class='noLoc'>저장된 일정이 없습니다.</li>";
                for (var i = 0; i < dayLoc.length; i++) {
                    dayLoc[i].removeAttribute('class');
                }
            }
    
        };
    }
    
    for (var i = 0; i < day.length; i++) {
        locListShow(i);
    }
    
    
    
    