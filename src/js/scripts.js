// --- Small JS comportamiento y accesibilidad ---
(function(){
    // Mobile menu toggle behavior
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobile = document.getElementById('closeMobile');

    function showMobile(){ mobileMenu.classList.add('open'); mobileMenu.setAttribute('aria-hidden','false'); }
    function hideMobile(){ mobileMenu.classList.remove('open'); mobileMenu.setAttribute('aria-hidden','true'); }

    if(menuToggle){
      menuToggle.addEventListener('click', showMobile);
      closeMobile.addEventListener('click', hideMobile);
      mobileMenu.addEventListener('click', (e)=>{ if(e.target === mobileMenu) hideMobile(); });
    }

    // Show menu-toggle on small screens
    function mqlChanged(){
      if(window.matchMedia('(max-width:700px)').matches){
        if(menuToggle) menuToggle.style.display='inline-block';
      } else {
        if(menuToggle) menuToggle.style.display='none';
        hideMobile();
      }
    }
    window.addEventListener('resize', mqlChanged);
    mqlChanged();

    // Hero background placeholder: set a subtle textured image sample if none provided
    const heroBg = document.getElementById('heroBg');
    // If you want to set a default hero image programmatically, uncomment and change below:
    // heroBg.style.backgroundImage = "url('images/hero.jpg'), linear-gradient(180deg, rgba(11,11,11,0.55), rgba(11,11,11,0.55))";

    // Contact form: send email to company
    const form = document.getElementById('contactForm');
    if(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        const name = form.name.value || 'Cliente';
        const email = form.email.value || '';
        const message = form.message.value || 'Quiero cotizar';
        
        // Create email content
        const subject = encodeURIComponent(`Consulta desde sitio web - ${name}`);
        const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
        
        // Open email client with pre-filled email
        const companyEmail = 'ventas@dickies-aguascalientes.mx';
        const mailtoLink = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoLink;
        
        // Show success popup
        showEmailModal();
      });
    }

    // Optional: smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
          if(window.matchMedia('(max-width:700px)').matches){
            // close mobile menu if open
            hideMobile();
          }
        }
      });
    });

    // Accessibility: enable keyboard opening of nav-item mega menus (on focus)
    document.querySelectorAll('.nav-item').forEach(item=>{
      item.addEventListener('focusin', ()=> {
        const mega = item.querySelector('.mega');
        if(mega) mega.style.display = 'flex';
      });
      item.addEventListener('focusout', ()=> {
        const mega = item.querySelector('.mega');
        if(mega) mega.style.display = '';
      });
    });

    // Product Modal functionality
    const productModal = document.getElementById('productModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalMainImage = document.getElementById('modalMainImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalMeta = document.getElementById('modalMeta');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalWhatsApp = document.getElementById('modalWhatsApp');
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    // Product data
    const productData = {
      'pantalones-874': {
        title: 'Pantalones Dickies 874',
        meta: 'Tallas: 28-42',
        description: 'Los pantalones Dickies 874 son el estándar de la industria para trabajo pesado. Con más de 50 años de historia, estos pantalones han sido probados en los entornos más exigentes.',
        features: [
          'Tela de algodón 100% resistente',
          'Corte clásico y cómodo',
          'Refuerzos en rodillas y asiento',
          'Bolsillos laterales y traseros',
          'Cierre con botones metálicos',
          'Disponible en múltiples colores'
        ],
        images: [
          'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop'
        ],
        whatsappText: 'Hola%20quiero%20cotizar%20los%20Pantalones%20874%20Dickies'
      },
      'chamarra-eisenhower': {
        title: 'Chamarra Eisenhower Dickies',
        meta: 'Tallas: S-XXL',
        description: 'La chamarra Eisenhower de Dickies combina estilo militar clásico con funcionalidad moderna. Perfecta para trabajo y uso casual.',
        features: [
          'Tela de algodón/poliéster resistente',
          'Corte militar clásico',
          'Cierre con botones metálicos',
          'Bolsillos frontales con solapa',
          'Forro interior suave',
          'Diseño atemporal y versátil'
        ],
        images: [
          'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop'
        ],
        whatsappText: 'Hola%20quiero%20cotizar%20la%20Chamarra%20Eisenhower%20Dickies'
      },
      'sudaderas-hoodies': {
        title: 'Sudaderas y Hoodies Dickies',
        meta: 'Tallas: S-XXL',
        description: 'Mantente cómodo y con estilo con nuestra colección de sudaderas y hoodies Dickies. Perfectos para trabajo y tiempo libre.',
        features: [
          'Tela de algodón/poliéster suave',
          'Corte cómodo y relajado',
          'Capucha ajustable con cordones',
          'Bolsillo canguro frontal',
          'Puños y cintura elásticos',
          'Logo Dickies bordado'
        ],
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        whatsappText: 'Hola%20quiero%20cotizar%20las%20Sudaderas%20y%20Hoodies%20Dickies'
      },
      'camisas-work': {
        title: 'Camisas Work Dickies',
        meta: 'Tallas: S-XXL',
        description: 'Las camisas de trabajo Dickies están diseñadas para resistir las condiciones más exigentes mientras mantienen un aspecto profesional.',
        features: [
          'Tela de algodón resistente',
          'Corte clásico de trabajo',
          'Cierre con botones metálicos',
          'Bolsillo de pecho con solapa',
          'Refuerzos en puntos de tensión',
          'Fácil cuidado y mantenimiento'
        ],
        images: [
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop'
        ],
        whatsappText: 'Hola%20quiero%20cotizar%20las%20Camisas%20Work%20Dickies'
      },
      'accesorios': {
        title: 'Accesorios Dickies',
        meta: 'Cinturones, gorras y parches',
        description: 'Completa tu outfit Dickies con nuestros accesorios de calidad. Desde cinturones resistentes hasta gorras con estilo.',
        features: [
          'Cinturones de cuero genuino',
          'Gorras con logo bordado',
          'Parches y insignias oficiales',
          'Calidad duradera',
          'Estilo auténtico Dickies',
          'Perfectos para completar el look'
        ],
        images: [
          'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop'
        ],
        whatsappText: 'Hola%20quiero%20cotizar%20los%20Accesorios%20Dickies'
      },
      'worktech': {
        title: 'Colección WorkTech Dickies',
        meta: 'Prendas que respiran • Desde $799',
        description: 'La tecnología WorkTech de Dickies combina comodidad y funcionalidad con materiales que respiran y se adaptan a tu cuerpo.',
        features: [
          'Tecnología de respirabilidad',
          'Materiales de secado rápido',
          'Corte ergonómico',
          'Resistente a manchas',
          'Comfort todo el día',
          'Ideal para trabajo activo'
        ],
        images: [
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop'
        ],
        whatsappText: 'Hola%20quiero%20cotizar%20la%20Colección%20WorkTech%20Dickies'
      }
    };

    function openProductModal(productId) {
      const product = productData[productId];
      if (!product) return;

      // Set product information
      modalTitle.textContent = product.title;
      modalMeta.textContent = product.meta;
      modalDescription.textContent = product.description;
      
      // Set features
      modalFeatures.innerHTML = `
        <h3>Características principales</h3>
        <ul>
          ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      `;

      // Set WhatsApp link
      modalWhatsApp.href = `https://wa.me/524495866828?text=${product.whatsappText}`;

      // Set images
      modalMainImage.src = product.images[0];
      modalMainImage.alt = product.title;
      
      // Clear and populate thumbnails
      thumbnailContainer.innerHTML = '';
      product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `${product.title} - Imagen ${index + 1}`;
        thumbnail.className = index === 0 ? 'active' : '';
        thumbnail.addEventListener('click', () => {
          modalMainImage.src = image;
          thumbnailContainer.querySelectorAll('img').forEach(img => img.classList.remove('active'));
          thumbnail.classList.add('active');
        });
        thumbnailContainer.appendChild(thumbnail);
      });

      // Show modal
      productModal.classList.add('open');
      productModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
      productModal.classList.remove('open');
      productModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Event listeners for modal
    document.querySelectorAll('[data-product]').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = button.getAttribute('data-product');
        openProductModal(productId);
      });
    });

    modalClose.addEventListener('click', closeProductModal);
    modalOverlay.addEventListener('click', closeProductModal);

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && productModal.classList.contains('open')) {
        closeProductModal();
      }
    });

    // Email Modal functionality
    const emailModal = document.getElementById('emailModal');
    const emailModalOverlay = document.getElementById('emailModalOverlay');
    const emailModalClose = document.getElementById('emailModalClose');
    const emailModalOk = document.getElementById('emailModalOk');

    function showEmailModal() {
      emailModal.classList.add('open');
      emailModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeEmailModal() {
      emailModal.classList.remove('open');
      emailModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    // Event listeners for email modal
    emailModalClose.addEventListener('click', closeEmailModal);
    emailModalOverlay.addEventListener('click', closeEmailModal);
    emailModalOk.addEventListener('click', closeEmailModal);

    // Close email modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && emailModal.classList.contains('open')) {
        closeEmailModal();
      }
    });

    // Scroll animations
    function initScrollAnimations() {
      const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);
      
      animatedElements.forEach(element => {
        observer.observe(element);
      });
    }

    // Initialize scroll animations when DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
      initScrollAnimations();
    }

  })();