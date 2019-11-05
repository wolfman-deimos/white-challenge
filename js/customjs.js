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

    $('#pkgselect').click(function(){
        if($('#pkgselect').val() === "red"){
            $('#redcard').fadeIn();
            $("#whtcard").hide();
            $("#bluecard").hide();
        } else if ($("#pkgselect").val() === "wht") {
            $("#whtcard").fadeIn();
            $("#redcard").hide();
            $("#bluecard").hide();
        } else if ($("#pkgselect").val() === "blue") {
            $("#bluecard").fadeIn();
            $("#redcard").hide();
            $("#whtcard").hide();
        } else {
            $("#bluecard").hide();
            $("#redcard").hide();
            $("#whtcard").hide();
        }
        ;
    });
});
