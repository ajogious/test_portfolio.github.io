// === jquery ===
$(document).ready(function() {

    // === pre-loader ===
  window.setTimeout(fadeOut(), 3000);
  $('.showcase').addClass('complete')
  function fadeOut() {
    $('.pre-loader').delay(3000).fadeOut('slow', function() {
      $('.showcase').removeClass('complete')
      $('.showcase').addClass('animate__fadeInUp');
    })
  }
 
  // === navbar sticky ===
  $(window).on('scroll', function() {
    const scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.sticky').addClass('stickyadd')
    } else {
      $('.sticky').removeClass('stickyadd')
    }
  });

  // === typed js ====
 const typed = new Typed('.element', {
  strings: ["I'm John Doe", "A Web Developer", "A Web Designer"],
  smartBackspace: true,
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  loopCount: Infinity,
  startDelay: 1000
});

// === filter images ===
const filterizd = $('.filter-container').filterizr({
  animationDuration: .5,
});

// ==== Owl Carousel ===
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  items: 1
});

})