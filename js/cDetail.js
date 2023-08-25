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

