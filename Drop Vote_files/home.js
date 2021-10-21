$('document').ready(function(){
    
    $('#read-more').mouseover(function(){
        $(this).addClass('animated');
        $(this).addClass('wobble');
        $(this).addClass('read-more-hover');
    });

    $('#read-more').mouseout(function(){
        $(this).removeClass('animated');
        $(this).removeClass('wobble');
        $(this).removeClass('read-more-hover');
    });

    $('.brand').addClass('animated');
    $('.brand').addClass('jackInTheBox');
    $('.brand').addClass('delay-2s');

    $('.news-l button').mouseover(function(){
        $(this).addClass('animated');
        $(this).addClass('wobble');
        $(this).addClass('news-btn-hover');
    });

    $('.news-l button').mouseout(function(){
        $(this).removeClass('animated');
        $(this).removeClass('wobble');
        $(this).removeClass('news-btn-hover');
    });

    $("#about").click(function() {
        $('html,body').animate({
            scrollTop: $(".about-us").offset().top},
            'slow');
    });

    $("#home").click(function() {
        $('html,body').animate({
            scrollTop: $(".header").offset().top},
            'slow');
    });

    $("#testi").click(function() {
        $('html,body').animate({
            scrollTop: $("#test-head").offset().top},
            'slow');
    });

    $("#faqs").click(function() {
        $('html,body').animate({
            scrollTop: $(".faq-h").offset().top},
            'slow');
    });

    $("#contactus").click(function() {
        $('html,body').animate({
            scrollTop: $(".contact-us").offset().top},
            'slow');
    });

});
