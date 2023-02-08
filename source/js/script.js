const mainHead = document.querySelector('.main-header');
const mainNav = document.querySelector('.main-nav');
const navToggle = mainHead.querySelector('.main-nav__toggle');

mainHead.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (mainHead.classList.contains('main-nav--opened')) {
    mainNav.style.display = 'none';
    mainHead.classList.add('main-nav--closed');
    mainHead.classList.remove('main-nav--opened');
  } else {
  mainNav.style.display = 'block';
  mainHead.classList.remove('main-nav--closed');
  mainHead.classList.add('main-nav--opened');
  }
});
