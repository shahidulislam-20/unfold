$("#sideMenu").hide();
$("#sidebarToggle").click(function(){
    $("#sideMenu").slideToggle();
    $("#sidebarToggle").toggleClass("arrow-up");
});

$(".sidebarClose").click(function(){
    $(".sidebar").toggleClass("sidebar-width");
});
$(".toggleMenu").click(function(){
    $(".sidebar").toggleClass("sidebar-width");
});



// OWL CAROUSEL ITEM
$(document).ready(function(){
    $(".carousel-active1").owlCarousel({
        items: 5,
        loop: true,
        autoplay: 3000,
        autoPlayHoverPause: true,
        center: false,
        smartSpeed: 3000,
        responsive: {
            0:{
                items: 1
            },320:{
                items: 2
            },575:{
                items: 3
            },768:{
                items: 4
            },1200:{
                items: 5
            }
        }
    });
});

$(document).ready(function(){
    $(".carousel-active2").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 20,
        margin: -100,
        smartSpeed: 2500,
        autoplay: 2500,
        autoplayHoverPause: true,
        dots: true,
        nav: true,
        responsive: {
            0:{
                margin: 10
            },992:{
                margin: 5
            },1200:{
                margin: -100
            }
        }
    });
});


// COUNTER UP PLUGIN
$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});