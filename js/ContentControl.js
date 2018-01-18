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

//Appends content on front-page
$(".intro-lead-in").append("<h1>APIs AS A SERVICE</h1>");
$(".intro-heading").append("Schedule Jobs/SMS for delivery, for as low as ₦ 1.89 per unit. Get 50 SMS Units per month for every monthly subscription on Transactional SMS.");
$(".tsms").append("&nbsp <strong>Transactional SMS Job Scheduler</strong> to send messages to any mobile number in Nigeria. We provide a service-facing API that can be used to execute timely SMSs on your running business platforms.");
$(".recurrent").append("&nbsp <strong>Recurrent Job Scheduler</strong> to schedule jobs that recurrently execute and be automatically re-scheduled. We provide an API to execute such recurrent jobs as required. (...coming soon)");
$(".cron").append("&nbsp <strong>Cron Job Scheduler</strong> that can be used for jobs intended to run periodically at fixed times, dates or intervals. (...coming soon)");
$(".one-time").append("&nbsp <strong>One-Time Job Scheduler</strong> that can be used to schedule jobs intended to run only once. (...coming soon)");
$(".bitcoin").append("&nbsp <strong>Bitcoin Transaction Confirmation</strong> service can be used to confirm all your Bitcoin transctions in real-time. (...coming soon)");