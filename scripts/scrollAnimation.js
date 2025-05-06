const vjnHidden = document.querySelector('.vjn-hidden');
const blobElements = document.querySelectorAll('.animate-blob');
const hiddenElements = document.querySelectorAll('.hidden');
const emoji = document.querySelector('.animate-emoji');
const formLeft = document.querySelector('.move-left-form');
const formRight = document.querySelector('.move-right-text');
const formBtn = document.querySelector('.form-section__btn');

function formBtnStyle() {
  formLeft.style.transform = 'translateX(-50%)';
  formLeft.style.borderRadius = '1.2rem 0 0 1.2rem';
}

function handleFormResize() {
  formBtn.removeEventListener('click', formBtnStyle);
  formObserver.observe(formLeft);
  formObserver.observe(formRight);
  if (window.innerWidth >= 1250) {
    formBtn.addEventListener('click', formBtnStyle);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      const animationType = element.getAttribute('data-animation');
      if (entry.isIntersecting) {
        element.classList.add(animationType);
      } else {
        element.classList.remove(animationType);
      }
    });
  },
  {
    threshold: [0, 0.5],
  }
);
blobElements.forEach((blob) => {
  observer.observe(blob);
});
observer.observe(vjnHidden);
hiddenElements.forEach((el) => observer.observe(el));
observer.observe(emoji);

const formObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      const animationType = element.getAttribute('data-animation');

      if (entry.isIntersecting && window.innerWidth >= 1250) {
        element.classList.add(animationType);
        formLeft.style.transform = 'translateX(-50%)';
        formLeft.style.borderRadius = '1.2rem 0 0 1.2rem';
      } else {
        formLeft.style.transform = 'translateX(0)';
        formLeft.style.borderRadius = '1.2rem';
        element.classList.remove(animationType);
      }
    });
  },
  {
    threshold: 0.5,
  }
);
handleFormResize();
///////////////////////////////////////////////////////////////////
// scroll animation for nav
const logoImg = document.querySelector('.navigation__img');
const headerNav = document.querySelector('header');
const navLinks = document.querySelectorAll('.navigation__link');
const main = document.querySelector('.main-section');
const marker = document.getElementById('scroll-marker');
const contactLink = document.querySelector('.navigation__link4');
function handleScroll() {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop >= 150) {
    if (window.innerWidth >= 1250) {
      headerNav.classList.add('scroll-nav-black');
      headerNav.classList.remove('scroll-nav-white');
      logoImg.src = 'assets/gooFactoryLogo-white.png';
    } else if (window.innerWidth > 800) {
      headerNav.classList.add('scroll-nav-white');
      headerNav.classList.remove('scroll-nav-black');
      logoImg.src = 'assets/gooFactoryLogo-black.png';
    }
  } else {
    headerNav.classList.remove('scroll-nav-black', 'scroll-nav-white');
    logoImg.src = 'assets/gooFactoryLogo-black.png';
  }
}

function handleResize() {
  handleScroll();
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', () => {
  handleResize();
  handleFormResize();
});

handleScroll();
