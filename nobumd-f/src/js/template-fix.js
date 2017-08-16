(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"]):not(.nav-link)').click(function () {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    target = target.offset().top;
    $('html, body').animate({
      scrollTop: (target - 48)
    }, 1000, "easeInOutExpo");

    return false;
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Closes responsive menu when a link is clicked
  $('.navbar-collapse>ul>li>a').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $('.page-top').fadeIn(300);
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $('.page-top').fadeOut(300);
    }
  });

  // Page Top
  $('.page-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000, "easeInOutExpo");
  });

  // Bootstrap Tooltips
  $('[data-toggle="tooltip"]').tooltip();

})(jQuery); // End of use strict
