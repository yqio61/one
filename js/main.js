$('.slider-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
  });

  
  $(document).ready(function() {
    $('.info-item-btn').click(function() {
        $(this).toggleClass('rotate');
        $(this).closest('.info-item').find('.info-item-text').toggleClass('display-none');
    });
});
