visualSlider();
snsSlider();

// slider
function visualSlider() {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        dots: true
    });
}

function snsSlider() {
    $('.sns-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        dots: true
      });
}