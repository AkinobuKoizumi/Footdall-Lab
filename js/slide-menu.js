


$(function() {
   
   
    //   スマホメニューボタン
    var menuFlag = false;
    $(".slide-trigger").click(function() {
       $(this).toggleClass("active");
       
       if($(this).hasClass("active")){
            $(".slide-menu-contents").slideDown(300);
            $(".slide-menu-contents li").fadeTo(0,0);
            $(".slide-menu-contents li").each(function(i) {
                $(this).delay(100 * i).fadeTo(300,1) 
            });

        } else {
            $(".slide-menu-contents").slideUp(300);
        }
        return false; 
    });


});