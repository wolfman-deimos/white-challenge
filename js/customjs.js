$(document).ready(function(){
    $('[data-toggle="popover"]').popover();



    $('#redinfo').popover({content: "Combines above-average sized socks and seasonally appropriate gear with toiletries and hygiene products with additional packaged food and water", trigger: "hover"});
    $('#whiteinfo').popover({content: "Combines seasonally sensitive clothing and gear for average sizes with hygiene products and oral care products with additional food and water", trigger: "hover"});
    $('#blueinfo').popover({content: "Combines underclothing with seasonally appropriate gear with toiletries and hygiene products including feminine hygiene with additional food and water", trigger: "hover"});


    $('#selectresidence').change(function(){
        if($('#selectresidence option:selected').text() == "Other"){
            $('#otherresidence').show();
        }
        else{
            $('#otherresidence').hide();
        }
    });

    $('#care_package').on({
        click: function() {
            $("#redcard, #whtcard, #bluecard").fadeIn(1500);
            },
        change: function() {
            if ($('#care_package').val() === "red") {
                $("#redcard").fadeTo("slow", 1);
                $("#whtcard, #bluecard").fadeTo("slow", .15);
                $("#redinfo").popover("enable");
                $('#blueinfo, #whiteinfo').popover("disable");
                // $("#bluecard").fadeTo("slow", .15);
            } else if ($("#care_package").val() === "white") {
                $("#whtcard").fadeTo("slow", 1);
                $("#redcard, #bluecard").fadeTo("slow", .15);
                $("#whiteinfo").popover("enable");
                $('#redinfo, #blueinfo').popover("disable");
                // $("#bluecard").fadeTo("slow", .15);
            } else if ($("#care_package").val() === "blue") {
                $("#bluecard").fadeTo("slow", 1);
                $("#blueinfo").popover("enable");
                $('#redinfo, #whiteinfo').popover("disable");
                $("#redcard, #whtcard").fadeTo("slow", .15);
                // $("#whtcard").fadeTo("slow", .15);
            } else if ($("#care_package").val() === "none") {
                $("#redcard, #whtcard, #bluecard").fadeTo("slow", 1);
                $("#redinfo, #blueinfo, #whiteinfo").popover("enable");
            }
        }

        });
    });
