$(function() {
    $('a.page-scroll').bind('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});




// $(window).on('load', function(){
//     setTimeout(removeLoader, 666); //wait for page load PLUS two seconds.
// });
// function removeLoader(){
//     $( ".loader" ).fadeOut(500, function() {
//         // fadeOut complete. Remove the loading div
//         $( ".loader" ).remove(); //makes page more lightweight
//     });
// }
window.addEventListener('load' , function () {
    document.querySelector('.loader').remove()
})