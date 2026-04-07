/**
 * Template Name: Personal - v2.1.0
 * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  'use strict';

  // Scroll-based header shrink
  function handleHeaderScroll() {
    if ($(window).scrollTop() > 80) {
      if (!$('#header').hasClass('header-top')) {
        $('#header').addClass('header-top');
        $('#intro-greeting').hide();
      }
    } else {
      if ($('#header').hasClass('header-top')) {
        $('#header').removeClass('header-top');
        $('#intro-greeting').show();
      }
    }
  }

  $(window).on('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // Nav Menu - smooth scroll + active state
  $(document).on('click', '.nav-menu a, .mobile-nav a', function (e) {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        var scrollTarget = hash === '#header' ? 0 : $(hash).offset().top - 80;
        $('html, body').animate({ scrollTop: scrollTarget }, 400);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass(
            'icofont-navigation-menu icofont-close'
          );
          $('.mobile-nav-overly').fadeOut();
        }

        return false;
      }
    }
  });

  // Highlight active nav item on scroll
  $(window).on('scroll', function () {
    var scrollPos = $(window).scrollTop() + 100;
    $('section').each(function () {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        var id = $(this).attr('id');
        $('.nav-menu a, .mobile-nav a').parent('li').removeClass('active');
        $('.nav-menu a[href="#' + id + '"], .mobile-nav a[href="#' + id + '"]').parent('li').addClass('active');
      }
    });
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none',
    });
    $('body').append($mobile_nav);
    $('body').prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass(
        'icofont-navigation-menu icofont-close'
      );
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $('.mobile-nav, .mobile-nav-toggle');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass(
            'icofont-navigation-menu icofont-close'
          );
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($('.mobile-nav, .mobile-nav-toggle').length) {
    $('.mobile-nav, .mobile-nav-toggle').hide();
  }

  // Typed.js intro animation
  $(document).ready(function () {
    if ($('.typed').length) {
      new Typed('.typed', {
        strings: [
          'Staff Software Engineer',
          'Cloud Infrastructure Engineer',
          'DevOps Engineer',
          'RHEL Certified Admin',
        ],
        typeSpeed: 55,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 300,
        loop: true,
      });
    }
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Skills section
  $('.skills-content').waypoint(
    function () {
      $('.progress .progress-bar').each(function () {
        $(this).css('width', $(this).attr('aria-valuenow') + '%');
      });
    },
    {
      offset: '80%',
    }
  );

  // Testimonials carousel (uses the Owl Carousel library)
  $('.testimonials-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    });

    $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter'),
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $('.venobox').venobox();
  });
})(jQuery);
