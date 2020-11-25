 // loader

 $("#loader").fadeOut("slow", function() {
     $("#preloader").delay(300).fadeOut("slow")
 })

 //  Menu
 $(window).scroll(function() {
     if ($('header').offset().top > 100) {
         $('.top-header').addClass('hide');
         $('.navigation').addClass('nav-bg');
         $('.navigations').addClass('nav-bg');
     } else {
         $('.top-header').removeClass('hide');
         $('.navigation').removeClass('nav-bg');
         $('.navigations').removeClass('nav-bg');
     }
 });

 // page scroll//
 $('a.page-scroll').on('click', function(e) {
     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
             }, 1000);
             return false;
         }
     }
 });

 /*close_toggle*/
 function close_toggle() {
     if ($(window).width() <= 768) {
         $('.navbar-collapse a').on('click', function() {
             $('.navbar-collapse').collapse('hide');
         });
     } else {
         $('.navbar .navbar-inverse a').off('click');
     }
 }
 close_toggle();
 $(window).resize(close_toggle);

 /*Back To Top*/
 if ($('#back-to-top').length) {
     var scrollTrigger = 100,
         backToTop = function() {
             var scrollTop = $(window).scrollTop();
             if (scrollTop > scrollTrigger) {
                 $('#back-to-top').addClass('show');
             } else {
                 $('#back-to-top').removeClass('show');
             }
         };
     backToTop();
     $(window).on('scroll', function() {
         backToTop();
     });
     $('#back-to-top').on('click', function(e) {
         e.preventDefault();
         $('html,body').animate({
             scrollTop: 0
         }, 900);
     });
 }