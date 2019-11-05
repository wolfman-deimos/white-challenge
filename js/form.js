$('#myForm').submit(function (e) {
    e.preventDefault();

    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let age = $('#age').val();
    let sex = $('#sex').children('option:selected').val();
    let rank = $('#rank').val();
    let housing = $('#housing').children('option:selected').val();
    let phone = $('#phone').val();
    let package = $('#care_package').children('option:selected').val();

    let user = {
        first_name: fname,
        last_name: lname,
        age: age,
        sex: sex,
        rank: rank,
        housing: housing,
        phone: phone,
        care_package: package
    };

    //const user_info = {title: 'Users', body: JSON.stringify(user)};
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


    //alert(fname + " " + lname + " " + age + " " + sex + " " + rank + " " + housing + " " + phone + " " + package);
    $(this).reset();
});