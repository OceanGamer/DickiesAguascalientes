// UI helpers: safe scroll lock, modals, scroll animations, and small utilities
(function(){
  // Safe scroll lock helpers
  function safeLockScroll(){
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    document.body.dataset.savedScroll = String(scrollY);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    // Extra handling for iOS Safari: prevent background touchmove but allow scrolling
    // inside designated scrollable containers (like modal body and mobile sheet).
    try {
      const ua = navigator && navigator.userAgent || '';
      const isIOS = /iP(ad|hone|od)|Macintosh/.test(ua) && 'ontouchend' in document;
      if (isIOS) {
        // handler that prevents touchmove except when the target is inside an allow-list
        window.__DA_UI__touchHandler = function(e){
          const allow = e.target.closest && e.target.closest('.modal-body, .product-details, .mobile-menu .sheet, .thumbnail-container, .sheet');
          if (!allow) {
            e.preventDefault();
          }
        };
        document.addEventListener('touchmove', window.__DA_UI__touchHandler, { passive: false });
      }
    } catch (err) {
      // ignore environment where navigator isn't available
    }
  }
  function safeUnlockScroll(){
    const saved = parseInt(document.body.dataset.savedScroll || '0', 10);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    // remove iOS touch handler if installed
    try {
      if (window.__DA_UI__touchHandler) {
        document.removeEventListener('touchmove', window.__DA_UI__touchHandler, { passive: false });
        delete window.__DA_UI__touchHandler;
      }
    } catch (err) {}

    window.requestAnimationFrame(() => {
      window.scrollTo(0, saved);
      delete document.body.dataset.savedScroll;
    });
  }

  // Scroll animations initializer
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    if (!animatedElements || !animatedElements.length) return;
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, observerOptions);
    animatedElements.forEach(element => observer.observe(element));
  }

  // Expose to global namespace small API used by other modules
  window.__DA_UI = {
    safeLockScroll,
    safeUnlockScroll,
    initScrollAnimations
  };

  // Auto init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
    });
  } else {
    initScrollAnimations();
  }

  // Email modal elements and handlers
  const emailModal = document.getElementById('emailModal');
  const emailModalOverlay = document.getElementById('emailModalOverlay');
  const emailModalClose = document.getElementById('emailModalClose');
  const emailModalOk = document.getElementById('emailModalOk');

  function showEmailModal(){ if (emailModal) { emailModal.classList.add('open'); emailModal.setAttribute('aria-hidden','false'); safeLockScroll(); } }
  function closeEmailModal(){ if (emailModal) { emailModal.classList.remove('open'); emailModal.setAttribute('aria-hidden','true'); safeUnlockScroll(); } }

  if (emailModalClose) emailModalClose.addEventListener('click', closeEmailModal);
  if (emailModalOverlay) emailModalOverlay.addEventListener('click', closeEmailModal);
  if (emailModalOk) emailModalOk.addEventListener('click', closeEmailModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && emailModal && emailModal.classList.contains('open')) closeEmailModal(); });

  // Contact form handling (opens mail client and shows email modal)
  const form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value || 'Cliente';
      const email = form.email.value || '';
      const message = form.message.value || 'Quiero cotizar';
      const subject = encodeURIComponent(`Consulta desde sitio web - ${name}`);
      const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
      const companyEmail = 'ventas@dickies-aguascalientes.mx';
      const mailtoLink = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      showEmailModal();
    });
  }

  // Expose email modal functions as part of API
  window.__DA_UI.showEmailModal = showEmailModal;
  window.__DA_UI.closeEmailModal = closeEmailModal;

})();
