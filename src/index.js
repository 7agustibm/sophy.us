import 'bootstrap';
import jquery from 'jquery';
import 'jquery.easing';
import './images'
import './style'

const navbarCollapse = () => {
    if (jquery("#mainNav").offset().top > 100) {
        jquery("#mainNav").addClass("navbar-shrink");
      } else {
        jquery("#mainNav").removeClass("navbar-shrink");
      }
  };
  navbarCollapse();
  window.addEventListener('scroll', navbarCollapse )

  jquery('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = jquery(this.hash);
      target = target.length ? target : jquery('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        jquery('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  jquery('.js-scroll-trigger').click(() => jquery('.navbar-collapse').collapse('hide'));

  // Activate scrollspy to add active class to navbar items on scroll
  jquery('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  