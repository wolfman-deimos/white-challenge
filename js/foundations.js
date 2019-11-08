"use strict";

const foundations = [
    {
        name: "Soldier's Angels' Homeless/Low Income Veteran Support",
        website: "https://soldiersangels.org/Homeless/Low-Income-Veteran-Support.html",
        address: "2895 NE Loop 410 Suite 107, San Antonio, TX 78218",
        phone: ["210-629-0024"],
        email: '',
        summary: 'Soldiers’ Angels hosts and organizes events and initiatives that benefit homeless & low income veterans.'
    },
    {
        name: "National Veterans Outreach (American GI Forum)",
        website: "https://www.agif-nvop.org/Services/VeteransServiceCenter.aspx",
        address: "611 N Flores Suite 100, San Antonio, TX 78205",
        phone: ["210-354-4892"],
        email: "giforum@agif-nvop.org",
        summary: 'The flagship of the organization is the Veterans Service Center (VSC) located in San Antonio where a “continuum of care” is available to veterans in need. The center is a one-stop center where a comprehensive service plan can be personalized for each applicant.'
    },
    {
        name: "Wounded Warrior Resource Center",
        website: "https://www.woundedwarriorproject.org/programs/wwp-resource-center#",
        address: "12672 Silicon Drive Suite 105, San Antonio, TX 78249",
        phone: ["210-561-2656"],
        email: 'sf-rc@woundedwarriorproject.org',
        summary: 'WWP serves veterans and service members who incurred a physical or mental injury, illness, or wound while serving in the military on or after September 11, 2001. Family members of these warriors are also eligible for free WWP programs and services.'
    },
    {
        name: "Haven for Hope",
        website: "https://www.havenforhope.org/GetHelp",
        address: "1 Haven for Hope Way, San Antonio, TX 78207",
        phone: ["210-220-2100"],
        email: 'info@havenforhope.org ',
        summary: 'The Haven for Hope mission is to offer a place of hope and new beginnings. We do this by providing, coordinating and delivering an efficient system of care for people experiencing homelessness in San Antonio.'
    },
    {
        name: "SAMMinistries, Inc",
        website: "https://www.samm.org",
        address: "1919 NW Loop 410 Suite 100, San Antonio, TX 78213",
        phone: ["210-340-0302"],
        email: 'hope@samm.org',
        summary: 'SAMMinistries’ Homeless Prevention Services provides rental assistance, utility assistance and supportive services to individuals and families who are in imminent danger of eviction, or are currently homeless.'
    },
    {
        name: "San Antonio Catholic Worker",
        website: "http://www.sa-catholicworker.org/home/",
        address: "626 Nolan, San Antonio, TX 78202",
        phone: ["210-224-7736"],
        email: '',
        summary: 'Since 1985, SACW has sought to provide care, comfort, and support to individuals who are homeless, poor, marginalized and in need of food and other basic services.'
    },
    {
        name: "Housing Authority of Bexar County",
        website: "https://habctx.org",
        address: "1954 E Houston St Suite 104, San Antonio, TX 78202",
        phone: ["210-225-0071"],
        email: 'info@habctx.org',
        summary: 'The HUD-Veterans Affairs Supportive Housing (HUD-VASH) program for homeless veterans combines Housing Choice Voucher (HCV) rental assistance with case management and clinical services provided by the Department of Veterans Affairs (VA) at VA medical centers and community-based outreach clinics.'
    },
    {
        name: "South Texas Veterans Health Care System (STVHCS from VA)",
        website: "https://www.va.gov/homeless/",
        address: "7400 Merton Minter, San Antonio, TX 78229",
        phone: ["Phone:210-617-5300", "Emergency:877-424-3838"],
        email: 'Homelessvets@va.gov',
        summary: ' VA’s specialized programs for homeless Veterans serve hundreds of thousands of homeless and at-risk Veterans each year. Independently and in collaboration with federal and community partners, VA programs provide Veterans with housing solutions, employment opportunities, health care, justice- and reentry-related services and more.'
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




