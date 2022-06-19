$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navText: ["", " "],

    responsive: {
      0: {
        items: 2,
      },

      1000: {
        items: 4,
      },
    },
  });
});
