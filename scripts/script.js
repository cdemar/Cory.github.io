const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');
const menu = document.querySelector('.menu');
const body = document.querySelector('body')
const html = document.querySelector('html')
const menuItems = document.querySelector('.menuItems')
let menuOpen = false;


hamburger.addEventListener('click', function(){
  this.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove')
  html.classList.toggle('stopMove')
})

/*
hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
  }
}); */
