const checkBox = document.getElementById('navi-toggle');
const links = document.querySelectorAll('.burger-btn');
const mainPage = document.querySelector('main');

links.forEach((link) => {
  link.addEventListener('click', () => {
    checkBox.checked = false;
  });
});
mainPage.addEventListener('click', () => {
  checkBox.checked = false;
});
