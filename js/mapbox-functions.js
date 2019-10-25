
function changeZoom(){
    geocode("San Antonio International Airport", mapboxToken).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(document.getElementById("zoomSelect").value);
    });
}

function changeFocus(){
    geocode(document.getElementById("geoAddress").value,accessToken).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(document.getElementById("zoomSelect").value);
        var popup = new mapboxgl.Popup()
            .setHTML(document.getElementById("geoAddress").value);
        var el = document.createElement('div');
        el.className = "marker";
        var marker = new mapboxgl.Marker(el)
            .setLngLat(result)
            .addTo(map)
            .setPopup(popup);
        markers.push(marker);
    });
}

function placeMarkerAndPopup(markerArr, token, map) {
    markerArr.forEach(function (info) {
        geocode(info.address, token).then(function(coordinates) {
            var popup = new mapboxgl.Popup()
                .setHTML(info.popupHTML);
            var el = document.createElement('div');
            el.className = "marker";
            var marker = new mapboxgl.Marker(el)

                .setLngLat(coordinates)
                .addTo(map)
                .setPopup(popup);
            markers.push(marker);
        });
    })

}
