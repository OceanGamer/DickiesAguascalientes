
    // Header transparente al hacer scroll hasta arriba
    function updateHeaderTransparency() {
      var header = document.querySelector('header');
      if (!header) return;
      if(window.scrollY < 30) {
        header.classList.add('transparent');
      } else {
        header.classList.remove('transparent');
      }
    }
    window.addEventListener('scroll', updateHeaderTransparency);
    window.addEventListener('DOMContentLoaded', updateHeaderTransparency);
