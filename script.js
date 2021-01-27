//  JavaScript Document
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    // autoWidth: true,
    loop: true,
    slideMargin: 40,
    item: 4,
    slideMargin: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 10,
        },
      },
      {
        breakpoint: 800,
        settings: {
          item: 2,
          slideMove: 1,
          slideMargin: 10,
        },
      },
      {
        breakpoint: 650,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});
