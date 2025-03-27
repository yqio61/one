$('.slider-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });

  $(document).ready(function() {
    $('.lang-link').on('click', function(e) {
      e.preventDefault();  
      $('.lang-link').removeClass('active');
      $(this).addClass('active');
    });
  });
  
  $(document).ready(function() {
    $('.info-item-btn').click(function() {
        $(this).toggleClass('rotate');
        $(this).closest('.info-item').find('.info-item-text').toggleClass('display-none');
    });
});

$(document).ready(function() {
  $('.info-add-btn').click(function() {
      $(this).toggleClass('rotate-180');
      $(this).closest('.info-add').find('.info-add-text').toggleClass('display-none');
  });
});



$(function() {
  $('.burger').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('stop-scroll');
    $('.menu').toggleClass('visible');
    
    $('.main').css('filter', function(_, currentValue) {
      return currentValue === 'blur(10px)' ? '' : 'blur(10px)';
    });
  });

  $('.menu-link, .menu-list').on('click', function() {
    $('.burger').removeClass('active');
    $('.menu').removeClass('visible');
    
    $('.main').css('filter', '');
  });
});


$(function() {
  $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
  });
});
