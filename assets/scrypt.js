document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.mobile-menu');
  const navUl = document.querySelector('nav ul');

  mobileMenu.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('touchstart', toggleMenu);

  function toggleMenu(event) {
      if (event.type === 'touchstart') event.preventDefault();
      navUl.classList.toggle('show');

      if (show) { //acessibilidade
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
      } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
      }
  }
});