const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navBar');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
  this.classList.toggle('close');
  nav.classList.toggle('reveal-nav');
  menu.classList.toggle('reveal-items');
})