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
    delay: 7900,
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
  on: {
    slideChangeTransitionEnd: function () {
      handleNestedSwipers(this.realIndex);
    },
  },
});

const nestedSwipers = [];

document.querySelectorAll('.swiper-img').forEach((swiperContainer, index) => {
  const nestedSwiper = new Swiper(swiperContainer, {
    effect: 'fade',
    speed: 1200,
    nested: true,
    centeredSlides: true,
    initialSlide: 0,
    allowTouchMove: false,
    slideActiveClass: 'swiperFilter',
    autoplay: {
      delay: 1700,
      disableOnInteraction: false,
      waitForTransition: true,
    },
  });

  nestedSwiper.autoplay.stop();
  nestedSwipers.push(nestedSwiper);
});

function handleNestedSwipers(activeIndex) {
  nestedSwipers.forEach((nestedSwiper, index) => {
    if (index === activeIndex) {
      nestedSwiper.slideTo(0, 0);
      nestedSwiper.autoplay.start();
    } else {
      nestedSwiper.autoplay.stop();
      nestedSwiper.slideTo(0, 0);
    }
  });
}

handleNestedSwipers(mainSwiper.realIndex);

const swiperContainer = document.querySelector('.swiper');
const swiperObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mainSwiper.autoplay.start();
      } else {
        mainSwiper.autoplay.stop();
      }
    });
  },
  { threshold: 0.5 }
);

swiperObserver.observe(swiperContainer);
