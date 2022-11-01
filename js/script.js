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

// 스크롤 감지 질문!

// function ScrollBg__init() {
//   // 스크롤 위치 확인 JS
//   $(window).scroll(function () {
//     let height = $(document).scrollTop();
//     console.log(height);

//     // 만약 height가 500 이상이라면 함수 실행해라
//     if (height > 800) {
//       $(".bg-img-1").addClass("active");
//     }
//   });
// }

SliderBox1__init();
SliderBox2__init();
// ScrollBg__init();
AOS.init();