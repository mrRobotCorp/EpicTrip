// ----------- 날짜 선택 -----------------
$(function () {
    $(".datePick").datepicker({
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear: true,
        changeYear: true, //콤보박스에서 년 선택 가능
        changeMonth: true,
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
    });
});


// ----------- 일정 map -----------------
function initMap() {

    var latLng = new google.maps.LatLng(37.6463376, 127.0235861);

    const map = new google.maps.Map(document.querySelector(".schMap"), {
        center: latLng,
        zoom: 10,
        disableDefaultUI: true,
    });

    // ---------- marker 표시 ------------
    const schLoc = [
        { label: "1", name: "석크민", lat: 37.6463376, lng: 127.0235861 },
        { label: "2", name: "토케피", lat: 37.541577, lng: 127.2219366 },
        { label: "3", name: "우사기", lat: 37.484269, lng: 126.929676 },
    ];
    schLoc.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map,
        });
    })



};

window.initMap = initMap;


