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