(function($) {
  "use strict"; // Start of use strict

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

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  $("#light-on").addClass('d-none');

  // dark team events
  $("#light-off").click(function() {
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
      
  });

  $("#light-on").click(function() {      
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
      
  });

  // preview profile
  $("#preview").click(function() {
    $("html, body").stop();
    $("html, body").animate({ scrollTop: $(document).height() - $(window).height() }, getDuration($(document).height() - $(window).height(), 2.5), "easeInOutSine");
  });

  function getDuration(target, rate) {
    var currentTop = $(window).scrollTop(), distance;
    distance = Math.abs(currentTop - target);
    return distance * rate;
  }

})(jQuery); // End of use strict
