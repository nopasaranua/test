/* Nav Toggle */
let nav = $('#nav');
let navToggle = $('#navToggle');

navToggle.on('click',function(event) {
    event.preventDefault();

    nav.toggleClass('show');
    navToggle.toggleClass('show');
});

/* Slider */
/* Reviews https://kenwheeler.github.io/slick/ */
let slider =  $('#slider');

	slider.slick({
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});