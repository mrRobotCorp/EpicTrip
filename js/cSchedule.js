window.initMap = function () {
    const map = new google.maps.Map(document.querySelector(".schMap"), {
        center: { lat: 37.5400456, lng: 126.9921017 },
        zoom: 10,
    });

    const malls = [
        { label: "1", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261 },
        { label: "2", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
    ];
    malls.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map,
        });
    })

};