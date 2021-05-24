const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const html = document.querySelector('html');
const menuItemsAbout = document.querySelector('.menuItemsAbout');
const menuItemsProjects = document.querySelector('.menuItemsProjects');
const menuItemsContact = document.querySelector('.menuItemsContact');
const menuItemsResume = document.querySelector('.menuItemsResume');


hamburger.addEventListener('click', function(){
  this.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItemsAbout.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItemsProjects.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItemsContact.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})

menuItemsResume.addEventListener('click', function(){
  hamburger.classList.toggle('close');
  navBar.classList.toggle('revealNav');
  menu.classList.toggle('revealItems');
  body.classList.toggle('stopMove');
  html.classList.toggle('stopMove');
})