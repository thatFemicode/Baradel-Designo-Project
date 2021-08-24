'use strict';

// Navbar Design
const menuBtn = document.querySelector('.menu-btn');
const navBlock = document.querySelector('.mobile-nav');
const mobileNavList = document.querySelector('.mobile-nav-list');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('open');
  navBlock.classList.toggle('active');
  mobileNavList.classList.toggle('active');
});

// URL change
const webDesign = document.querySelector('.view-design-left');
const appDesign = document.querySelector('.app-design');
const graphicDesign = document.querySelector('.graphic-design');
// webDesign.addEventListener('click', () => {
//   document.location = './pages/web-design.html';
//   webDesign.style.display = 'none';
// });
// appDesign.addEventListener('click', () => {
//   document.location = './pages/app-design.html';
// });
// graphicDesign.addEventListener('click', () => {
//   document.location = './pages/graphic-design.html';
// });

const design = document.querySelectorAll('.design');
// console.log(design);
design.forEach(page => {
  // console.log(page);
  if (page.classList.contains('large-web-design')) {
    page.addEventListener('click', function() {
      location.href = './pages/web-design.html';
      page.style.display = 'none';
    });
  } else if (page.classList.contains('app-design')) {
    page.addEventListener('click', function() {
      location.href = './pages/app-design.html';
      page.style.display = 'none';
    });
  } else if (page.classList.contains('graphic-design')) {
    page.addEventListener('click', function() {
      location.href = './pages/graphic.html';
      page.style.display = 'none';
    });
  }
});

// Design bar
const designCard = document.querySelectorAll('.design-card');
designCard.forEach(card => {
  // console.log(card.lastElementChild);
  // console.log(card.lastElementChild.lastElementChild);
  // console.log(card.lastElementChild.firstElementChild);
  card.addEventListener('mouseenter', () => {
    card.classList.add('active');
    card.lastElementChild.classList.add('active');
    card.lastElementChild.lastElementChild.classList.remove('black');
    card.lastElementChild.firstElementChild.classList.remove('peach');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('active');
    card.lastElementChild.classList.remove('active');
    card.lastElementChild.lastElementChild.classList.add('black');
    card.lastElementChild.firstElementChild.classList.add('peach');
  });
});

// Contact form validation

const input = document.querySelectorAll('input');
const form = document.querySelector('#contact-form');
const textarea = document.querySelectorAll('textarea');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    input.forEach(inp => {
      if (inp.value === '' || inp.value === null) {
        inp.nextElementSibling.classList.add('active');
      } else {
        inp.nextElementSibling.classList.remove('active');
      }
    });
    textarea.forEach(text => {
      if (text.value === '' || text.value === null) {
        text.nextElementSibling.classList.add('active');
      } else {
        text.nextElementSibling.classList.remove('active');
      }
    });
  });
}
