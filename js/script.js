visualSlider();

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