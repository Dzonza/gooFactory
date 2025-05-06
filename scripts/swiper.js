const mainSwiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 0,
  speed: 1200,
  mousewheel: {
    invert: true,
    invertToAxis: true,
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    waitForTransition: true,
  },
  slideActiveClass: 'swiperActive',
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 45,
    stretch: 80,
    depth: 550,
    modifier: 0.5,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const nestedSwiper = new Swiper('.swiper-img', {
  effect: 'fade',
  speed: 1200,
  nested: true,
  centeredSlides: true,
  initialSlide: 0,
  slideActiveClass: 'swiperFilter',
  pagination: {
    el: '.nested-swiper-pagination',
    clickable: true,
  },
});
