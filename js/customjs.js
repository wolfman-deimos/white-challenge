$(document).ready(function(){
    $('[data-toggle="popover"]').popover();

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
                $("#whtcard").fadeTo("slow", .15);
                $("#bluecard").fadeTo("slow", .15);
            } else if ($("#care_package").val() === "white") {
                $("#whtcard").fadeTo("slow", 1);
                $("#redcard").fadeTo("slow", .15);
                $("#bluecard").fadeTo("slow", .15);
            } else if ($("#care_package").val() === "blue") {
                $("#bluecard").fadeTo("slow", 1);
                $("#redcard").fadeTo("slow", .15);
                $("#whtcard").fadeTo("slow", .15);
            }
        }

        });
    });
