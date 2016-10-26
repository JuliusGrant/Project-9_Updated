// Notification Alert Bar
    //Used jQuery again here for ease of syntax/use

$(".alert").delay(200).fadeOut('slow').fadeIn('slow').delay(200).fadeOut('slow').fadeIn('slow').delay(200).fadeOut('slow').fadeIn('slow');

 //Close Alert on Click
 $(".closebtn").click(function() {
     $(".alert").fadeOut("slow");
     $("#notifier").fadeOut("fast");
 });

 //Notification Menu toggle
 $(".icon-notify").click(function() {
     $(".notify-menu").fadeToggle("slow");
 });
     //Clicking on menu also closes it
     $(".notify-menu").click(function() {
         $(".notify-menu").fadeOut("slow");
     });
