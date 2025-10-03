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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png",
            "4.png"
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
          ],
          "imageNames": [
            "1.png",
            "2.png",
            "3.png"
          ]
        }
    ];
    // Mobile menu toggle behavior
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobile = document.getElementById('closeMobile');

  // Safe scroll lock helpers: preservan la posición del scroll y evitan
  // que la página 'salte' o que el scroll no se restaure al cerrar modales.
  function safeLockScroll(){
    // Guardamos la posición en body para mayor compatibilidad y fijamos
    // body en position:fixed para deshabilitar el scroll sin cambiar la
    // posición visual de la página.
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    document.body.dataset.savedScroll = String(scrollY);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }
  function safeUnlockScroll(){
    // Restauramos estilos y desplazamos la ventana a la posición guardada.
    const saved = parseInt(document.body.dataset.savedScroll || '0', 10);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    // Ejecutar en el siguiente frame para asegurar que los estilos se apliquen
    // y evitar saltos inesperados.
    window.requestAnimationFrame(() => {
      window.scrollTo(0, saved);
      delete document.body.dataset.savedScroll;
    });
  }

  function showMobile(){ mobileMenu.classList.add('open'); mobileMenu.setAttribute('aria-hidden','false'); safeLockScroll(); }
  function hideMobile(){ mobileMenu.classList.remove('open'); mobileMenu.setAttribute('aria-hidden','true'); safeUnlockScroll(); }

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

  // Índice del producto actualmente mostrado en el modal (para evitar races)
  let modalActiveIndex = null;

    // Productos dinámicos: carga desde JSON y usa imágenes locales por carpeta
    let loadedProducts = [];
    let productImagesCache = new Map();

    // Simplificamos el control del scroll al abrir modales/menus para evitar
    // bugs en algunos navegadores que dejaban la página en negro. Usamos
    // document.body.style.overflow = 'hidden' / '' en lugar de manipulaciones
    // complejas del DOM y handlers iOS.

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

    async function getImagesForProduct(indexZeroBased, maxAttempts = 6) {
      // Devuelve la lista de imágenes existentes para un producto.
      // Para evitar múltiples 404 y saturar GH Pages limitamos la cantidad de intentos por producto
      if (productImagesCache.has(indexZeroBased)) {
        return productImagesCache.get(indexZeroBased);
      }
      const folderIndex = indexZeroBased + 1; // carpetas 1..N
      const base = `src/img/products/${folderIndex}/`;
      // Si el producto tiene una lista explícita de nombres de imagen, usarla (evita 404s y permite nombres personalizados)
      const product = Array.isArray(loadedProducts) && loadedProducts[indexZeroBased];
      const attempts = [];
      if (product && Array.isArray(product.imageNames) && product.imageNames.length) {
        for (const name of product.imageNames) {
          attempts.push(tryLoadImage(`${base}${name}`));
        }
      } else {
        // Intentar un rango razonable de archivos 1..maxAttempts.png
        for (let i = 1; i <= maxAttempts; i++) {
          attempts.push(tryLoadImage(`${base}${i}.png`));
        }
      }
      const results = await Promise.all(attempts);
      const images = results.filter(Boolean);
      // Si no se encontró nada, usar un placeholder genérico si existe
      const finalImages = images.length > 0 ? images : ['src/img/placeholder.png'];
      productImagesCache.set(indexZeroBased, finalImages);
      return finalImages;
    }

    // Helper: obtener solo la primera imagen del producto (thumbnail) sin
    // forzar la resolución de todas las imágenes. Esto evita descargar
    // todas las miniaturas cuando sólo se renderiza la tarjeta <article>.
    async function getProductThumbnail(indexZeroBased) {
      // Primero intentar usar cache si existe
      if (productImagesCache.has(indexZeroBased)) {
        const cached = productImagesCache.get(indexZeroBased);
        return Array.isArray(cached) && cached.length ? cached[0] : 'src/img/placeholder.png';
      }
      // Si en los datos del producto existe imageNames, usar la primera
      const product = Array.isArray(loadedProducts) && loadedProducts[indexZeroBased];
      if (product && Array.isArray(product.imageNames) && product.imageNames.length) {
        const candidate = `src/img/products/${indexZeroBased + 1}/${product.imageNames[0]}`;
        const ok = await tryLoadImage(candidate);
        if (ok) return candidate;
      }
      // Fallback: intentar el primer archivo 1.png
      const fallback = `src/img/products/${indexZeroBased + 1}/1.png`;
      const ok2 = await tryLoadImage(fallback);
      if (ok2) return fallback;
      // Definitivo fallback
      return 'src/img/placeholder.png';
    }

    function buildWhatsAppLink(nombre, codigo) {
      const text = encodeURIComponent(`Hola quiero cotizar el producto ${nombre}${codigo ? ' (código ' + codigo + ')' : ''}`);
      return `https://wa.me/524495866828?text=${text}`;
    }

    // Nuevo: renderizado progresivo de productos uno-a-uno
    async function renderProductsGrid() {
      const grid = document.querySelector('.products-grid');
      if (!grid) return;
      if (!loadedProducts.length) {
        return; // dejar el contenido estático si no hay datos
      }

      // Mostrar spinner mientras carga el primer producto
      grid.innerHTML = '<div class="loader" aria-hidden="false" style="display:flex;justify-content:center;padding:40px">' +
        '<svg width="36" height="36" viewBox="0 0 50 50" aria-hidden="true"><circle cx="25" cy="25" r="20" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-dasharray="31.4 31.4" transform="rotate(-90 25 25)"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></circle></svg>' +
        '</div>';

      // Renderizar productos uno a uno para evitar multitud de peticiones simultáneas
      grid.innerHTML = '';
      for (let idx = 0; idx < loadedProducts.length; idx++) {
        const prod = loadedProducts[idx];
        // Crear tarjeta vacía con placeholder visual
        const article = document.createElement('article');
        article.className = 'product';
        article.setAttribute('role', 'listitem');
        article.innerHTML = `
          <div class="thumb" style="background:#f3f3f3;min-height:160px;display:flex;align-items:center;justify-content:center;">
            <div style="width:40px;height:40px" class="thumb-spinner">
              <svg width="40" height="40" viewBox="0 0 50 50" aria-hidden="true"><circle cx="25" cy="25" r="20" fill="none" stroke="#999" stroke-width="3" stroke-linecap="round" stroke-dasharray="31.4 31.4" transform="rotate(-90 25 25)"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.9s" repeatCount="indefinite"/></circle></svg>
            </div>
          </div>
          <div class="info">
            <div class="title">Cargando...</div>
            <div class="meta">&nbsp;</div>
            <div class="actions">
              <a class="btn primary" href="#" data-product-index="${idx}">Más info</a>
              <a class="btn" href="#" target="_blank" style="border:1px solid #ddd">Cotizar</a>
            </div>
          </div>`;

        grid.appendChild(article);

        // Registrar el listener del botón 'Más info' inmediatamente para que
        // el usuario pueda abrir el modal aunque la tarjeta aún esté cargando.
        const initialBtn = article.querySelector('[data-product-index]');
        if (initialBtn) {
          initialBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const i = parseInt(initialBtn.getAttribute('data-product-index'), 10);
            // Abrir modal (la función abrirá imágenes en segundo plano)
            openProductModalByIndex(i);
          });
        }

        // Cargar solo la miniatura (primera imagen) y datos para este producto
        try {
          const thumb = await getProductThumbnail(idx);
          const title = prod.nombre || 'Producto Dickies';
          const meta = [prod.codigo, prod.talla].filter(Boolean).join(' • ');
          const wp = buildWhatsAppLink(title, prod.codigo);

          // Reemplazar contenido del article con la info real
          article.querySelector('.thumb').innerHTML = `<img src="${thumb}" alt="${title}" style="width:100%;height:100%;object-fit:cover">`;
          article.querySelector('.title').textContent = title;
          article.querySelector('.meta').textContent = meta;
          const actions = article.querySelectorAll('.actions a');
          if (actions[1]) actions[1].setAttribute('href', wp);
        } catch (err) {
          // En caso de error no bloqueamos el resto
          console.warn('Error cargando producto', idx, err);
        }

        // Pequeña pausa para no saturar requests en paralelo (throttle)
        await new Promise(r => setTimeout(r, 120));
      }
    }

    async function openProductModalByIndex(indexZeroBased) {
      const product = loadedProducts[indexZeroBased];
      if (!product) return;

      // Marcar índice activo para evitar que cargas asíncronas de otros
      // índices sobrescriban el modal si el usuario abrió otro producto.
      modalActiveIndex = indexZeroBased;

      const title = product.nombre || '';
      const meta = [product.categoria, product.talla, product.codigo].filter(Boolean).join(' • ');
      const description = product.descripcion_e_informacion_breve_del_producto || '';
      const features = Array.isArray(product.caracteristicas) ? product.caracteristicas : [];

      // Mostrar datos básicos inmediatamente para que el modal aparezca rápido
      modalTitle.textContent = title;
      modalMeta.textContent = meta;
      modalDescription.textContent = description;
      modalFeatures.innerHTML = features.length ? `
        <h3>Características principales</h3>
        <ul>
          ${features.map(f => `<li>${f}</li>`).join('')}
        </ul>` : '';
      modalWhatsApp.href = buildWhatsAppLink(title, product.codigo);

      // Placeholder mientras cargan las imágenes
      modalMainImage.src = 'src/img/placeholder.png';
      modalMainImage.alt = title;
      thumbnailContainer.innerHTML = '';

      // Mostrar modal de inmediato
      productModal.classList.add('open');
      productModal.setAttribute('aria-hidden', 'false');
      safeLockScroll();

      // Cargar imágenes en segundo plano y actualizar el modal cuando estén listas
      try {
        const images = await getImagesForProduct(indexZeroBased);
        // Si el usuario abrió otro modal, abortar la actualización
        if (modalActiveIndex !== indexZeroBased) return;

        modalMainImage.src = images[0] || 'src/img/placeholder.png';
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
      } catch (err) {
        console.warn('Error cargando imágenes del producto para modal', indexZeroBased, err);
      }
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
      safeLockScroll();
    }

    function closeProductModal() {
      productModal.classList.remove('open');
      productModal.setAttribute('aria-hidden', 'true');
      safeUnlockScroll();
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
      safeLockScroll();
    }

    function closeEmailModal() {
      emailModal.classList.remove('open');
      emailModal.setAttribute('aria-hidden', 'true');
      safeUnlockScroll();
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