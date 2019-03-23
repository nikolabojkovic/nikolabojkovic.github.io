$(document).ready(function() {
    $('#mainNav').load('../pages/navigation/navigation.html', function () {
        // Collapse now if page is not at top
        navbarCollapse();

        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);

        var theme = localStorage.getItem('theme');
        $("#light-on").addClass('d-none');
        if (theme == 'dark') {
          switchLightOff();
        }
    
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $("html, body").stop(true);
              $('html, body').animate({
                scrollTop: (target.offset().top - 70)
              }, 2000, "easeInOutExpo");
              return false;
            }
          }
        });
    
        // Scroll to top button appear
        $(document).scroll(function() {
          var scrollDistance = $(this).scrollTop();
          if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
          } else {
            $('.scroll-to-top').fadeOut();
          }
        });
    
        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(function() {
          $('.navbar-collapse').collapse('hide');
        });
    
        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
          target: '#mainNav',
          offset: 80
        });
    
      // dark team events
      $("#light-off").click(function() {
        switchLightOff();
        localStorage.setItem('theme', 'dark');
      });
    
      $("#light-on").click(function() {      
        switchLightOn();
        localStorage.setItem('theme', 'light');
      });
    
    
        // preview profile
        $("#preview").click(function() {
          $("html, body").stop();
          $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, getDuration($(document).height() - $(window).height(), 2.5), "easeInOutSine");
        });
    });
});

// Collapse Navbar
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};

function switchLightOn() {
    $("#light-on").addClass('d-none');
    $("#light-off").removeClass('d-none');

    var socialBtn;
    $("body").removeClass('body-dark');
    $("hr").removeClass('bg-light');
    $(".bg-progress-bar-dark").addClass('bg-progress-bar');
    $(".bg-progress-bar-dark").removeClass('bg-progress-bar-dark');
    $(".portfolio-modal-dialog").removeClass('portfolio-modal-dialog-dark');

    $(".card").removeClass('card-dark');

    // navbar
    $("nav").removeClass('navbar-dark');
    $(".navbar-nav").removeClass('navbar-nav-dark');
    $(".nav-link").removeClass('nav-link-dark');

     // footer
    $("footer").removeClass('footer-dark');
    $("footer").addClass('footer');
    $(".copyright").removeClass('copyright-dark');
    
    socialBtn = $(".btn-social-light");
    socialBtn.removeClass('btn-social-light');
    socialBtn.addClass('btn-social'); 
}

function switchLightOff() {
    $("#light-off").addClass('d-none');
    $("#light-on").removeClass('d-none');

    var socialBtn; 
    $("body").addClass('body-dark');
    $("hr").addClass('bg-light');
    $(".bg-progress-bar").addClass('bg-progress-bar-dark');
    $(".bg-progress-bar").removeClass('bg-progress-bar');
    $(".portfolio-modal-dialog").addClass('portfolio-modal-dialog-dark');

    $(".card").addClass('card-dark');

    // navbar
    $("nav").addClass('navbar-dark');
    $(".navbar-nav").addClass('navbar-nav-dark');
    $(".nav-link").addClass('nav-link-dark');

    // footer
    $("footer").removeClass('footer')
               .addClass('footer-dark');
    $(".copyright").addClass('copyright-dark');
    socialBtn = $(".btn-social");
    socialBtn.removeClass('btn-social');
    socialBtn.addClass('btn-social-light');
}

function getDuration(target, rate) {
    var currentTop = $(window).scrollTop(), distance;
    distance = Math.abs(currentTop - target);
    return distance * rate;
}