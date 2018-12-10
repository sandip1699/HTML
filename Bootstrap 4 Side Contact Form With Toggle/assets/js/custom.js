jQuery(function ($) {
    $("#getintouch").css("display","none");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if (scroll >= 450) {
            $("#getintouch").css("display","block");
        } else {
            $("#getintouch").css("display","none");
        }
    });
    $('#getintouch').on('click', '.contactform-btn', function (e) { 
           $('#getintouch').toggleClass('in');
    });
   

    
});