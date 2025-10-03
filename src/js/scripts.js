// --- Small JS comportamiento y accesibilidad ---
(function(){
    // --- Datos de productos integrados localmente (antes en productsInfo.json) ---
    const productsInfo = [
        {
          "nombre": "Dickies Shorts de Trabajo 42283",
          "codigo": "42283DN",
          "talla": "32 / 13",
          "descripcion_e_informacion_breve_del_producto": "Shorts de trabajo originales de Dickies.",
          "categoria": "Shorts de trabajo",
          "caracteristicas": [
            "Tela duradera de sarga",
            "Resistente a arrugas y manchas",
            "Ajuste espacioso",
            "Bolsillos frontales y traseros",
            "Logo de la marca en la pierna"
          ]
        },
        {
          "nombre": "Dickies Pantalón de Trabajo Ajustado",
          "codigo": "874",
          "talla": "32 / 29",
          "descripcion_e_informacion_breve_del_producto": "Pantalón de trabajo original Dickies 874, ideal para el trabajo o uso diario.",
          "categoria": "Pantalones de trabajo",
          "caracteristicas": [
            "Corte ajustado que se asienta en la cintura",
            "Tela duradera de sarga",
            "Resistente a arrugas y manchas",
            "Bolsillos frontales y traseros",
            "Logo de la marca en la parte lateral"
          ]
        },
        {
          "nombre": "Dickies Pantalón de Trabajo Ajustado",
          "codigo": "874DS",
          "talla": "30 / 32",
          "descripcion_e_informacion_breve_del_producto": "Pantalón de trabajo original Dickies 874, ideal para el trabajo o uso diario.",
          "categoria": "Pantalones de trabajo",
          "caracteristicas": [
            "Corte ajustado que se asienta en la cintura",
            "Tela duradera de sarga",
            "Resistente a arrugas y manchas",
            "Bolsillos frontales y traseros",
            "Logo de la marca en la parte trasera"
          ]
        },
        {
          "nombre": "Dickies Pantalón de Trabajo Original",
          "codigo": "874",
          "talla": "32 / 32",
          "descripcion_e_informacion_breve_del_producto": "Pantalón de trabajo original Dickies 874, ideal para el uso diario y el trabajo.",
          "categoria": "Pantalones de trabajo",
          "caracteristicas": [
            "Corte recto",
            "Tejido duradero de sarga",
            "Resistente a arrugas y manchas",
            "Se asienta cómodamente en la cintura",
            "Bolsillos frontales y traseros",
            "Logo de la marca en la parte trasera"
          ]
        },
        {
          "nombre": "Dickies Pantalón de Trabajo 'Double Knee'",
          "codigo": "85283DN",
          "talla": "42 / 32",
          "descripcion_e_informacion_breve_del_producto": "Pantalón de trabajo original Dickies 'Double Knee' ideal para trabajos de alto impacto.",
          "categoria": "Pantalones de trabajo",
          "caracteristicas": [
            "Ajuste relajado",
            "Refuerzo de doble capa en las rodillas",
            "Tela resistente a arrugas y manchas",
            "Bolsillos frontales, traseros y uno pequeño en el costado de la pierna"
          ]
        },
        {
          "nombre": "Dickies Pantalón Cargo de Trabajo",
          "codigo": "WP592DS",
          "talla": "30 / 32",
          "descripcion_e_informacion_breve_del_producto": "Pantalón cargo de trabajo Dickies con gran capacidad de almacenamiento.",
          "categoria": "Pantalones de trabajo",
          "caracteristicas": [
            "Corte amplio y recto",
            "Tela duradera de sarga",
            "Resistente a arrugas y manchas",
            "Bolsillos cargo en los costados",
            "Bolsillos frontales y traseros"
          ]
        },
        {
          "nombre": "Dickies Jeans de Trabajo 'Carpenter'",
          "codigo": "1993",
          "talla": "34 / 32",
          "descripcion_e_informacion_breve_del_producto": "Jeans de trabajo Dickies ideales para el trabajo manual.",
          "categoria": "Jeans de trabajo",
          "caracteristicas": [
            "Corte de carpintero con ajuste relajado",
            "Pierna recta",
            "Fabricados en denim duradero",
            "Resistentes para el uso rudo",
            "Costuras reforzadas",
            "Múltiples bolsillos y lazo para martillo",
            "Logo de Dickies en la parte trasera"
          ]
        },
        {
          "nombre": "Dickies Pantalón de Trabajo 'Skinny Straight'",
          "codigo": "WP801DS",
          "talla": "28 / 32",
          "descripcion_e_informacion_breve_del_producto": "Pantalón de trabajo 'Skinny Straight' de Dickies, ideal para un estilo versátil.",
          "categoria": "Pantalones de trabajo",
          "caracteristicas": [
            "Corte moderno y ajustado",
            "Durabilidad de la ropa de trabajo tradicional",
            "Tela resistente a arrugas y manchas",
            "Bolsillos frontales y traseros",
            "Logo de Dickies en la parte trasera"
          ]
        },
        {
          "nombre": "Dickies Pantalón de Trabajo 'Skinny Straight'",
          "codigo": "WP801DN",
          "talla": "28 / 32",
          "descripcion_e_informacion_breve_del_producto": "Pantalón de trabajo 'Skinny Straight' de Dickies ideal para quienes buscan un look más contemporáneo sin sacrificar la funcionalidad.",
          "categoria": "Pantalones de trabajo",
          "caracteristicas": [
            "Corte ajustado y moderno",
            "Versión más estilizada de la ropa de trabajo clásica",
            "Resistente a arrugas y manchas",
            "Bolsillos frontales y traseros"
          ]
        },
        {
          "nombre": "Dickies Camisa de Trabajo de Manga Corta",
          "codigo": "574",
          "talla": "S",
          "descripcion_e_informacion_breve_del_producto": "Camisa de trabajo original de Dickies, ideal para el trabajo o el uso casual.",
          "categoria": "Camisas de trabajo",
          "caracteristicas": [
            "Manga corta y corte amplio",
            "Tela resistente a arrugas y manchas",
            "Dos bolsillos frontales con solapa",
            "Cierre de botones",
            "Logo de la marca en la parte inferior"
          ]
        },
        {
          "nombre": "Dickies Camisa de Trabajo de Manga Corta",
          "codigo": "574",
          "talla": "XL",
          "descripcion_e_informacion_breve_del_producto": "Camisa de trabajo original de Dickies con un corte amplio.",
          "categoria": "Camisas de trabajo",
          "caracteristicas": [
            "Ajuste cómodo",
            "Manga corta",
            "Tela de sarga duradera",
            "Resistente a las arrugas y a las manchas",
            "Dos bolsillos en el pecho con solapa",
            "Botones a presión",
            "Logo de la marca en la parte inferior delantera"
          ]
        },
        {
          "nombre": "Dickies Camisa de Trabajo de Manga Larga",
          "codigo": "574",
          "talla": "S",
          "descripcion_e_informacion_breve_del_producto": "Camisa de trabajo original de Dickies, ideal para el trabajo o el uso casual.",
          "categoria": "Camisas de trabajo",
          "caracteristicas": [
            "Corte amplio y manga larga",
            "Mayor comodidad y protección",
            "Tela duradera",
            "Resistente a arrugas y manchas",
            "Dos bolsillos en el pecho con solapa",
            "Cierre de botones",
            "Logo de la marca en la parte inferior"
          ]
        },
        {
          "nombre": "Dickies Pantalón de Trabajo 'Loose Fit'",
          "codigo": "85283DS",
          "talla": "38 / 32",
          "descripcion_e_informacion_breve_del_producto": "Pantalón de trabajo Dickies 'Loose Fit' ideal para el trabajo diario.",
          "categoria": "Pantalones de trabajo",
          "caracteristicas": [
            "Corte amplio y pierna recta",
            "Ajuste holgado para libertad de movimiento",
            "Tela duradera de sarga",
            "Resistente a las arrugas y manchas",
            "Bolsillos frontales, traseros y un bolsillo lateral pequeño"
          ]
        }
    ];
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

    // Productos dinámicos: carga desde JSON y usa imágenes locales por carpeta
    let loadedProducts = [];
    let productImagesCache = new Map();

    async function fetchProducts() {
      // Usar los datos locales integrados
      loadedProducts = Array.isArray(productsInfo) ? productsInfo : [];
    }

    function tryLoadImage(url) {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => resolve(null);
        img.src = url;
      });
    }

    async function getImagesForProduct(indexZeroBased) {
      if (productImagesCache.has(indexZeroBased)) {
        return productImagesCache.get(indexZeroBased);
      }
      const folderIndex = indexZeroBased + 1; // carpetas 1..N
      const base = `src/img/products/${folderIndex}/`;
      // Intentar un rango razonable de archivos 1..60.png
      const attempts = [];
      for (let i = 1; i <= 60; i++) {
        attempts.push(tryLoadImage(`${base}${i}.png`));
      }
      const results = await Promise.all(attempts);
      const images = results.filter(Boolean);
      // Si no se encontró nada, usar un placeholder genérico si existe
      const finalImages = images.length > 0 ? images : ['src/img/placeholder.png'];
      productImagesCache.set(indexZeroBased, finalImages);
      return finalImages;
    }

    function buildWhatsAppLink(nombre, codigo) {
      const text = encodeURIComponent(`Hola quiero cotizar el producto ${nombre}${codigo ? ' (código ' + codigo + ')' : ''}`);
      return `https://wa.me/524495866828?text=${text}`;
    }

    async function renderProductsGrid() {
      const grid = document.querySelector('.products-grid');
      if (!grid) return;
      if (!loadedProducts.length) {
        return; // dejar el contenido estático si no hay datos
      }

      const cards = await Promise.all(loadedProducts.map(async (prod, idx) => {
        const images = await getImagesForProduct(idx);
        const thumb = images[0];
        const title = prod.nombre || 'Producto Dickies';
        const meta = [prod.codigo, prod.talla].filter(Boolean).join(' • ');
        const wp = buildWhatsAppLink(title, prod.codigo);
        return `
        <article class="product" role="listitem">
          <div class="thumb">
            <img src="${thumb}" alt="${title}" style="width:100%;height:100%;object-fit:cover">
          </div>
          <div class="info">
            <div class="title">${title}</div>
            <div class="meta">${meta}</div>
            <div class="actions">
              <a class="btn primary" href="#" data-product-index="${idx}">Más info</a>
              <a class="btn" href="${wp}" target="_blank" style="border:1px solid #ddd">Cotizar</a>
            </div>
          </div>
        </article>`;
      }));

      grid.innerHTML = cards.join('\n');

      // Enlazar eventos de apertura de modal
      grid.querySelectorAll('[data-product-index]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const idx = parseInt(btn.getAttribute('data-product-index'), 10);
          await openProductModalByIndex(idx);
        });
      });
    }

    async function openProductModalByIndex(indexZeroBased) {
      const product = loadedProducts[indexZeroBased];
      if (!product) return;

      const images = await getImagesForProduct(indexZeroBased);
      const title = product.nombre || '';
      const meta = [product.categoria, product.talla, product.codigo].filter(Boolean).join(' • ');
      const description = product.descripcion_e_informacion_breve_del_producto || '';
      const features = Array.isArray(product.caracteristicas) ? product.caracteristicas : [];

      modalTitle.textContent = title;
      modalMeta.textContent = meta;
      modalDescription.textContent = description;

      modalFeatures.innerHTML = features.length ? `
        <h3>Características principales</h3>
        <ul>
          ${features.map(f => `<li>${f}</li>`).join('')}
        </ul>` : '';

      modalWhatsApp.href = buildWhatsAppLink(title, product.codigo);

      // Imágenes
      modalMainImage.src = images[0] || '';
      modalMainImage.alt = title;
      thumbnailContainer.innerHTML = '';
      images.forEach((src, i) => {
        const th = document.createElement('img');
        th.src = src;
        th.alt = `${title} - Imagen ${i + 1}`;
        th.className = i === 0 ? 'active' : '';
        th.addEventListener('click', () => {
          modalMainImage.src = src;
          thumbnailContainer.querySelectorAll('img').forEach(img => img.classList.remove('active'));
          th.classList.add('active');
        });
        thumbnailContainer.appendChild(th);
      });

      productModal.classList.add('open');
      productModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

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

    // Event listeners para modal (dinámico: se agregan tras render)

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

    // Inicializar productos dinámicos
    async function initProducts(){
      await fetchProducts();
      await renderProductsGrid();
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initProducts);
    } else {
      initProducts();
    }

  })();