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
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }
  
  window.onload = function() {
    setInterval(showNextSlide, 5000); // Cambiar de imagen cada 5 segundos
  };