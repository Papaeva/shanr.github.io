const btnElement = document.querySelector('#btn');
btnElement.addEventListener('click', () => {
  alert('Напишите мне на norzhima1102@mail.ru');
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navMenu.classList.toggle('close');
  });
}
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//   const img = card.querySelector('img');
//   const text = card.querySelector('p');
//   if (img && text) {
//     img.addEventListener = function() {
//       alert(text.innerText);
//     };
//   }
// });

// const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
// const navLinks = document.querySelector('#navLinks');
// mobileMenuBtn.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
//   mobileMenuBtn.innerHTML = navLinks.classList.contains('active')
//   ? 
// })


