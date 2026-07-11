const btnElement = document.querySelector('#btn');
btnElement.addEventListener('click', () => {
  alert('Позвоните мне по номеру телефона: +79269994389');
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navMenu.classList.toggle('close');
  });
}


(function() {
  const btn = document.getElementById('topBtn');
  let isVisible = false;

  // Функция показа/скрытия
  function toggleVisibility() {
    const scrollY = window.scrollY;
    if (scrollY > 300 && !isVisible) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
      isVisible = true;
    } else if (scrollY <= 300 && isVisible) {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
      isVisible = false;
    }
  }

  // Обработчик прокрутки
  window.addEventListener('scroll', toggleVisibility);

  // Проверка при загрузке (на случай, если страница уже прокручена)
  toggleVisibility();

  // (Опционально) Плавная прокрутка через JS, если не хотим полагаться на CSS
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();
