// EVENT HANDLER FOR SUBMITTING THE FORM

$('#fieldform').submit(function (e) {
    e.preventDefault();

    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let age = $('#age').val();
    let sex = $('#sex').children('option:selected').val();
    let military = $('#military').children('option:selected').val();
    let rank = $('#rank').val();
    let housing = $('#selectresidence').children('option:selected').val();
    let other = $('#other_residence').val();
    let phone = $('#phone').val();
    let package = $('#care_package').children('option:selected').val();
    let user = {};
    let options = {
        enableHighAccuracy: true,
        timeout: 5000
    };

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Longitud: " + position.coords.longitude + " Latitude: " + position.coords.latitude);

            user.first_name = fname;
            user.last_name = lname;
            user.age = age;
            user.sex = sex;
            user.military = military;
            user.rank = rank;
            user.housing = housing;
            user.other = other;
            user.phone = phone;
            user.care_package = package;
            user.last_location = {
                longitud: position.coords.longitude,
                latitud: position.coords.latitude
            };


        }, function (error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    console.log("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    console.log("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("An unknown error occurred.");
                    break;
            }

        },options);
    }
    else {
        user.first_name = fname;
        user.last_name = lname;
        user.age = age;
        user.sex = sex;
        user.military = military;
        user.rank = rank;
        user.housing = housing;
        user.other = other;
        user.phone = phone;
        user.care_package = package;
        user.last_location = {
            longitud: -98.4951,
            latitud: 29.4246
        };

    }

    setTimeout(function () {
        const user_info = {title: 'Users', body: JSON.stringify(user)};
        const url = 'http://localhost:3000/users';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        };
        fetch(url, options)
            .then()
            .catch();

        $(this).reset();
    }, 5100);

});