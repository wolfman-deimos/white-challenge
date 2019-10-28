"use strict";

// todo: Can we put a brief description for each of the foundations in each object, I want to utilise the popups in mapbox to have a description as well as all the information already posted
const foundations = [
    {
        name: "Soldier's Angels",
        website: "https://soldiersangels.org",
        address: "2895 NE Loop 410 Suite 107, San Antonio, TX 78218",
        phone: ["210-629-0024"],
        email: ''
    },
    {
        name: "National Veterans Outreach (American GI Forum)",
        website: "https://www.agif-nvop.org/Services/VeteransServiceCenter.aspx",
        address: "611 N Flores Suite 100, San Antonio, TX 78205",
        phone: ["210-354-4892"],
        email: "giforum@agif-nvop.org"
    },
    {
        name: "Wounded Warrior",
        website: "https://www.woundedwarriorproject.org/?utm_expid=.YZjiD6riSxaXpkYaPbpn5A.0&utm_referrer=https%3A%2F%2Fsupport.woundedwarriorproject.org%2Fdefault.aspx%3Ftsid%3D11585%26ovr_acv_id%3D6794%26campaignSource%3DONLINE%26source%3DBS19040%26gclsrc%3Daw.ds%26ds_rl%3D1264110%26gclid%3DEAIaIQobChMI8tTV89uz5QIVD9vACh2A2AAVEAAYASAAEgLJgfD_BwE%26gclsrc%3Daw.ds",
        address: "12672 Silicon Drive Suite 105, San Antonio, TX 78249",
        phone: ["210-561-2656"],
        email: ''
    },
    {
        name: "Haven for Hope",
        website: "https://www.havenforhope.org/GetHelp",
        address: "1 Haven for Hope Way, San Antonio, TX 78207",
        phone: ["210-220-2100"],
        email: 'info@havenforhope.org '
    },
    {
        name: "SAMMinistries, Inc",
        website: "https://www.samm.org",
        address: "1919 NW Loop 410 Suite 100, San Antonio, TX 78213",
        phone: ["210-340-0302"],
        email: 'hope@samm.org'
    },
    {
        name: "San Antonio Catholic Worker",
        website: "http://www.sa-catholicworker.org/home/",
        address: "626 Nolan, San Antonio, TX 78202",
        phone: ["210-224-7736"],
        email: ''
    },
    {
        name: "Housing Authority of Bexar County",
        website: "https://habctx.org",
        address: "1954 E Houston St Suite 104, San Antonio, TX 78202",
        phone: ["210-225-0071"],
        email: ''
    },
    {
        name: "South Texas Veterans Health Care System (STVHCS from VA)",
        website: "https://www.va.gov/homeless/",
        address: "7400 Merton Minter, San Antonio, TX 78229",
        phone: ["Phone:210-617-5300", "Emergency:877-424-3838"],
        email: 'Homelessvets@va.gov'
    }
];

function createNewFoundation(name, web, address, phone, email) {
    let foundation = {
        name: name,
        website: web,
        address: address,
        phone: [phone],
        email: email
    };
    foundations.push(foundation);
}

function getFoundationPhones(obj){
    let allPhones = '';

    obj.phone.forEach(function (phone) {
        allPhones += (" " + phone);
    });

    return allPhones;
}

//Code to access the JSON File as a DB
var requestURL = "http://localhost:3000/foundations";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

//code to manipulate the JSON FIle as it loads
request.onload = function () {
    var myFoundations = request.response;
    console.log(myFoundations);
}




