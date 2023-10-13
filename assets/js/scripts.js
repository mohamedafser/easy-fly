/*
* ----------------------------------------------------------------------------------------
Author       : Easy Fly
Template Name: Easy Fly - Easy Fly Travel Agency
Version      : 1.0      
Date         : 15-10-2023                                   
* ----------------------------------------------------------------------------------------
*/

window.addEventListener('hashchange', function(){
    document.querySelector('.active').classList.remove('active');
    document.querySelector('[href="'+window.location.hash+'"]').classList.add('active');
});

(function ($) {
    'use strict';
    function mobileMenu(win, resize) {
        if(win <= 767) {          
            $("#open-menu").click(function() {
                $(this).hide()
                $("#close-menu").show();
                $(".navbar-wrapper").show();
                $("html, body").animate({ scrollTop: 0 }, 0);
                $("body").css("overflow", "hidden")
            })
    
            
            $("#close-menu").click(function() {
                $(this).hide()
                $("#open-menu").show();
                $(".navbar-wrapper").hide();
                $("body").css("overflow", "auto")
            })
    
            $(".smoth-scroll").click(function(e) {
                $("body").css("overflow", "auto")
                $(".navbar-wrapper").hide();
                $("#close-menu").hide();
                $("#open-menu").show();
            })
        } 
    }

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#navbar a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#navbar a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

    jQuery(document).ready(function () {
        $(document).on("scroll", onScroll);
        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */
        var prealoaderOption = $(window);
        prealoaderOption.on("load", function () {
            var preloader = jQuery('.spinner');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND JS
         * ----------------------------------------------------------------------------------------
         */

        
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 200) {
                $(".header-top-area").addClass("menu-bg");
            } else {
                $(".header-top-area").removeClass("menu-bg");
            }
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  MAIN MENU
         * ----------------------------------------------------------------------------------------
         */

        $(window).on('resize', function(){
            var win = $(this); //this = window
            if(win.width() <= 767) {
                mobileMenu(win.width(), true)
            }
        });
        
        mobileMenu($(window).width())

        /*
         * ----------------------------------------------------------------------------------------
         *  SCROOL TO UP JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 250) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();

    });

})(jQuery);
