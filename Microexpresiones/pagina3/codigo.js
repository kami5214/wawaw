window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  var btnInicio = document.querySelector('.btn-inicio');

  window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 100) {
      btnInicio.classList.remove('hidden');
    } else {
      btnInicio.classList.add('hidden');
    }
  });
  
  var slides = document.querySelectorAll('.slide');
var currentIndex = 0;

function showNextSlide() {
  var nextIndex = (currentIndex + 1) % slides.length;
  slides[nextIndex].style.opacity = '1';
  
  currentIndex = nextIndex;
  
  // Carga la siguiente imagen antes de que se complete la transición
  var img = new Image();
  img.src = slides[(currentIndex + 1) % slides.length].src;
}

window.onload = function() {
  setInterval(showNextSlide, 5000); // Cambiar de imagen cada 5 segundos
};
