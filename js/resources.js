"use strict";

let myFoundations;
//Code to access the JSON File as a DB
const requestURL = "http://localhost:3000/foundations";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
//code to manipulate the JSON FIle as it loads
request.onload = function () {
    myFoundations = request.response;
    placeMarkerAndPopup(myFoundations, mapboxKey, map);
    displayFoundations();

    myFoundations.forEach(function (info) {
        let popupHTML = "<h3 style='text-align: center'><a href='" + info.website + "' target='_blank'>" + info.name + "</a></h3><p>Description Here</p><h4><a href='mailto:" + info.email + "</a></h4><h4>" + info.phone + "</h4>"
        geocode(info.address, mapboxKey).then(function(coordinates) {
            var popup = new mapboxgl.Popup()
                .setHTML(popupHTML);
            var addRibbon = document.createElement('div');
            addRibbon.className = 'marker-foundation';
            var marker = new mapboxgl.Marker(addRibbon)
                .setLngLat(coordinates)
                .addTo(map)
                .setPopup(popup);
            markers.push(marker);
        });
    });

};

mapboxgl.accessToken = mapboxKey;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
});

map.addControl(new mapboxgl.NavigationControl());

geocode("San Antonio", mapboxKey).then(function(result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(9);
});

// todo: for some reason the collapsible is moving over to the right with every row, I think it should be uniform to the right
function displayFoundations(){
        let bodyElement = document.getElementById("information");
        let html = "<div class='accordion' id='accordionExample'>";

        myFoundations.forEach(function (foundation, index) {
            let heading = "heading" + index;
            let collapse = "collapse" + index;
            let information = "<div class='found_inf'><h6>" + foundation.address + "</h6><p><a href='" + foundation.website + "' target='_blank'>" + foundation.website + "</a></p><p><a href='mailto:" + foundation.email + "'>" + foundation.email + "</a></p><p><a href='" + foundation.phone + "'>" + foundation.phone + "</a></p></div>";

            html += "<div class = 'card'><div class='card-header' id='" + heading + "'><h2 class = 'mb-0'> <button class = 'btn btn-link' type = 'button' data-toggle = 'collapse' data-target = '#" + collapse + "' aria-expanded = 'true' aria-controls = '" + collapse + "'>" + foundation.name + "</button></h2></div><div id = '" + collapse + "' class='collapse' aria-labelledby='"+ heading +"' data-parent='#accordionExample'><div class='card-body'>" + information + "</div></div>";
        });

        html += "</div>";
        bodyElement.innerHTML = html;
};
