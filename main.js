/** jquery
**
**/



var hamburger = $('.hamburger-menu');
var bars = $("header .header-right > a");
var close = $(".hamburger-menu .close");

bars.click( function(){
   hamburger.addClass("active");
});

close.click( function(){
    hamburger.removeClass("active");
});
