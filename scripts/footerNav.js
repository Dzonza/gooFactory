const navMenu = document.querySelector('.footer-section__navigation-menu');

const handleHover = function (e) {
  if (e.target.classList.contains('footer-section__footer-link')) {
    const link = e.target;
    const siblings = link
      .closest('.footer-section__navigation-menu')
      .querySelectorAll('.footer-section__footer-link');
    siblings.forEach((e) => {
      if (e !== link) e.style.opacity = this;
    });
  }
};

navMenu.addEventListener('mouseover', handleHover.bind(0.5));
navMenu.addEventListener('mouseout', handleHover.bind(1));
