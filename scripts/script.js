const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navBar');
const menu = document.querySelector('.menu');
const body = document.querySelector('body')
const html = document.querySelector('html')


hamburger.addEventListener('click', function(){
  this.classList.toggle('close');
  nav.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove')
  html.classList.toggle('stopMove')
})
