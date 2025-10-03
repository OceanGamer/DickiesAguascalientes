// Products module: data, image loading, rendering grid and product modal
(function(){
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
            "3.png"
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

  // We'll lazy-initialize elements when DOM is ready
  let loadedProducts = [];
  const productImagesCache = new Map();

  function tryLoadImage(url){
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => resolve(null);
      img.src = url;
    });
  }

  async function getImagesForProduct(indexZeroBased, maxAttempts = 6){
    if (productImagesCache.has(indexZeroBased)) return productImagesCache.get(indexZeroBased);
    const folderIndex = indexZeroBased + 1;
    const base = `src/img/products/${folderIndex}/`;
    const product = Array.isArray(loadedProducts) && loadedProducts[indexZeroBased];
    const attempts = [];
    if (product && Array.isArray(product.imageNames) && product.imageNames.length){
      for (const name of product.imageNames) attempts.push(tryLoadImage(`${base}${name}`));
    } else {
      for (let i=1;i<=maxAttempts;i++) attempts.push(tryLoadImage(`${base}${i}.png`));
    }
    const results = await Promise.all(attempts);
    const images = results.filter(Boolean);
    const finalImages = images.length ? images : ['src/img/placeholder.webp'];
    productImagesCache.set(indexZeroBased, finalImages);
    return finalImages;
  }

  async function getProductThumbnail(indexZeroBased){
    if (productImagesCache.has(indexZeroBased)){
      const cached = productImagesCache.get(indexZeroBased);
      return Array.isArray(cached) && cached.length ? cached[0] : 'src/img/placeholder.webp';
    }
    const product = Array.isArray(loadedProducts) && loadedProducts[indexZeroBased];
    if (product && Array.isArray(product.imageNames) && product.imageNames.length){
      const candidate = `src/img/products/${indexZeroBased+1}/${product.imageNames[0]}`;
      const ok = await tryLoadImage(candidate);
      if (ok) return candidate;
    }
    const fallback = `src/img/products/${indexZeroBased+1}/1.png`;
    const ok2 = await tryLoadImage(fallback);
    if (ok2) return fallback;
    return 'src/img/placeholder.webp';
  }

  function buildWhatsAppLink(nombre, codigo){
    const text = encodeURIComponent(`Hola quiero cotizar el producto ${nombre}${codigo ? ' (código ' + codigo + ')' : ''}`);
    return `https://wa.me/524495866828?text=${text}`;
  }

  async function renderProductsGrid(){
    const grid = document.querySelector('.products-grid');
    if (!grid) return;
    if (!loadedProducts.length) return;
    grid.innerHTML = '';
    for (let idx=0; idx<loadedProducts.length; idx++){
      const prod = loadedProducts[idx];
      const article = document.createElement('article');
      article.className = 'product';
      article.setAttribute('role','listitem');
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
      const initialBtn = article.querySelector('[data-product-index]');
      if (initialBtn) initialBtn.addEventListener('click', (e)=>{ e.preventDefault(); openProductModalByIndex(idx); });
      try{
        const thumb = await getProductThumbnail(idx);
        const title = prod.nombre || 'Producto Dickies';
        const meta = [prod.codigo, prod.talla].filter(Boolean).join(' • ');
        const wp = buildWhatsAppLink(title, prod.codigo);
        article.querySelector('.thumb').innerHTML = `<img src="${thumb}" alt="${title}" style="width:100%;height:100%;object-fit:cover">`;
        article.querySelector('.title').textContent = title;
        article.querySelector('.meta').textContent = meta;
        const actions = article.querySelectorAll('.actions a'); if (actions[1]) actions[1].setAttribute('href', wp);
      } catch(err){ console.warn('Error cargando producto', idx, err); }
      await new Promise(r => setTimeout(r, 120));
    }
  }

  // Modal refs
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
  let modalActiveIndex = null;

  async function openProductModalByIndex(indexZeroBased){
    const product = loadedProducts[indexZeroBased];
    if (!product) return;
    modalActiveIndex = indexZeroBased;
    const title = product.nombre || '';
    const meta = [product.categoria, product.talla, product.codigo].filter(Boolean).join(' • ');
    const description = product.descripcion_e_informacion_breve_del_producto || '';
    const features = Array.isArray(product.caracteristicas) ? product.caracteristicas : [];
    if (modalTitle) modalTitle.textContent = title;
    if (modalMeta) modalMeta.textContent = meta;
    if (modalDescription) modalDescription.textContent = description;
    if (modalFeatures) modalFeatures.innerHTML = features.length ? `\n        <h3>Características principales</h3>\n        <ul>\n          ${features.map(f => `<li>${f}</li>`).join('')}\n        </ul>` : '';
    if (modalWhatsApp) modalWhatsApp.href = buildWhatsAppLink(title, product.codigo);
    if (modalMainImage) { modalMainImage.src = 'src/img/placeholder.webp'; modalMainImage.alt = title; }
    if (thumbnailContainer) thumbnailContainer.innerHTML = '';
    if (productModal) { productModal.classList.add('open'); productModal.setAttribute('aria-hidden','false'); window.__DA_UI && window.__DA_UI.safeLockScroll(); }
    try{
      const images = await getImagesForProduct(indexZeroBased);
      if (modalActiveIndex !== indexZeroBased) return;
      if (modalMainImage) modalMainImage.src = images[0] || 'src/img/placeholder.webp';
      if (thumbnailContainer) {
        thumbnailContainer.innerHTML = '';
        images.forEach((src, i) => {
          const th = document.createElement('img'); th.src = src; th.alt = `${title} - Imagen ${i+1}`; th.className = i===0 ? 'active' : ''; th.addEventListener('click', ()=>{ if (modalMainImage) modalMainImage.src = src; thumbnailContainer.querySelectorAll('img').forEach(img => img.classList.remove('active')); th.classList.add('active'); }); thumbnailContainer.appendChild(th);
        });
      }
    } catch(err){ console.warn('Error cargando imágenes del producto para modal', indexZeroBased, err); }
  }

  function closeProductModal(){
    if (productModal) { productModal.classList.remove('open'); productModal.setAttribute('aria-hidden','true'); window.__DA_UI && window.__DA_UI.safeUnlockScroll(); }
  }

  // Attach listeners (guarding nulls)
  if (modalClose) modalClose.addEventListener('click', closeProductModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeProductModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && productModal && productModal.classList.contains('open')) closeProductModal(); });

  async function fetchProducts(){ loadedProducts = Array.isArray(productsInfo) ? productsInfo : []; }

  async function initProducts(){ await fetchProducts(); await renderProductsGrid(); }

  // Expose init to global
  window.__DA_PRODUCTS = { initProducts, openProductModalByIndex };
  // also expose loadedProducts for interoperability/fallbacks (will be populated after fetch)
  Object.defineProperty(window.__DA_PRODUCTS, '_loadedProducts', {
    get(){ return loadedProducts; },
    configurable: true
  });

  // Auto init DOMContentLoaded
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initProducts); else initProducts();

})();
