{
    $('.slick01').slick({
    autoplay: true,
    dots: true,
    arrows:true,
    prevArrow:'<i class="fas fa-arrow-left arrow-icon-left"></i>',
    nextArrow:'<i class="fas fa-arrow-right arrow-icon-right"></i>'
    });
}
$('.slick01').slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          dots: false,
        }
      },
    ]
  });

