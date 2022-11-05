function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-1 .swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-1 .swiper-button-next",
      prevEl: ".slider-box-1 .swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".slider-box-1 .swiper-scrollbar"
    },

    autoplay: {
      delay: 4000, // 5초마다 슬라이드 넘김
      disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
    }
  });
}

function SliderBox2__init() {
  const swiper = new Swiper(".slider-box-2 .swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    centeredSlides:true,
    spaceBetween:-100,

    scrollbar: {
      el: ".slider-box-2 .swiper-scrollbar"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-2 .swiper-button-next",
      prevEl: ".slider-box-2 .swiper-button-prev"
    }
  });
}

function QuickMenu__init () {
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 250) {
        $('.quick-menu').fadeIn();
      } else {
        $('.quick-menu').fadeOut();
      }
    });
  
    $(".top-btn").click(function() {
      $('html, body').animate({
        scrollTop : 0
      }, 400);
      return false;
    });
  });
}


SliderBox1__init();
SliderBox2__init();
AOS.init();
QuickMenu__init ();