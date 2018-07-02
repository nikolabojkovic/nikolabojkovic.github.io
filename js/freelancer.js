(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
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

  $(document).on('click', '#download-cv',  function() {
    var documentContent = "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";

    var blob = dataURItoBlob(documentContent);
    var cvFile = new File([blob], "Nikola Bojkovic CV", {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"});

     //IE
     if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(cvFile, cvFile.name);
        return;
      } 

      var fileUrl = URL.createObjectURL(cvFile);
      this.href = fileUrl;
      this.download = cvFile.name;
  });

  var dataURItoBlob = function (dataURI) {
    var bytes = [];
    var utf8 = atob(dataURI);
    for (var i = 0; i < utf8.length; i++) {
        bytes.push(utf8.charCodeAt(i));
    }

    return new Blob([new Uint8Array(bytes)]);
  };

})(jQuery); // End of use strict
