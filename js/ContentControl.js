// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var introHeadings =["Automate Tasks for your Digital Solutions",
                    "Schedule Transactional Triggers",
                    "Provide reliable Customer Support Channels"];

                    introHeadings.forEach(function(item, index, array){
                        console.log(item, index);
                    });

//Appends content on front-page
$(".intro-lead-in").append("<h1>API AS A SERVICE</h1>");
$(".intro-heading").append(introHeadings[0]);
$(".tsms").append("<strong>Transactional SMS Job Scheduler</strong><br>Send messages to any mobile number in Nigeria. We provide a service-facing API that can be used to execute timely SMSs on your running business platforms.");
$(".recurrent").append("<strong>Recurrent Job Scheduler</strong><br> Schedule jobs that recurrently execute and  can be automatically re-scheduled. We provide a service API to execute such recurrent jobs as required.");
$(".cron").append("<strong>Cron Job Scheduler</strong><br> Schedule jobs intended to run periodically at fixed times, dates or intervals. We have a service API available to get you up and running.");
$(".one-time").append("<strong>One-Time Job Scheduler</strong><br> Schedule jobs intended to run only once. Simply setup and enable using our service API.");
$(".bitcoin").append("<strong>Bitcoin Transaction Confirmation</strong><br> Setup and enbale real-time confirmation of all your Bitcoin transctions. It's that easy!");

var changeIntro = function() {
    $(".into-heading").append(introHeadings[1]);
};

changeIntro();