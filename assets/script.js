
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 990, );
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

var $btn = $("button.btnSubmit");
var $loaderTemplate = $("svg.loader");
var $checkmarkTemplate = $("svg.checkmark");

$btn.on('click', function() {
    if ($(this).hasClass('clicked')) return;
    $(this).addClass('clicked');
    var self = $(this);
    var timeout1 = 600,
        timeout2 = 2500,
        timeout3 = 3000;
    setTimeout(function() {

        self.append($loaderTemplate.clone());
        self.find('svg').removeClass('svg--template');
        self.find('svg').css('display', 'initial');
    }, timeout1);
    setTimeout(function() {
        self.text('');
        self.find('svg').remove();
        self.append($checkmarkTemplate.clone());
        self.find('svg').css('display', 'initial');
        self.find('svg').removeClass('svg--template');
        self.addClass('done');
    }, timeout1 + timeout2);
    setTimeout(function() {
        self.find('svg').remove();
        self.text('Submit');
        self.removeClass('clicked');
        self.removeClass('done');
    }, timeout1 + timeout2 + timeout3);
});

$(function () {
    $("#contactForm").click(function (e) {
        e.preventDefault()
    })
});