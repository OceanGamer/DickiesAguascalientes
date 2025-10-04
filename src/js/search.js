(function(){
  // Simple client-side search for site content and products
  // - Loads products JSON from src/img/products/productsInfo.json
  // - Indexes name, code, category, description
  // - Renders a small dropdown under the existing header search input
  // - Supports keyboard navigation and opening product modal via global API

  const SEARCH_JSON = 'src/img/products/productsInfo.json';
  const DEBOUNCE_MS = 180;
  let products = [];
  let index = [];
  let resultsContainer = null;
  let activeIndex = -1;
  let pageIndex = [];

  function textForProduct(p, idx){
    return `${p.nombre || ''} ${p.codigo || ''} ${p.categoria || ''} ${p.descripcion_e_informacion_breve_del_producto || ''}`.toLowerCase();
  }

  async function loadProducts(){
    try{
      const resp = await fetch(SEARCH_JSON, {cache: 'no-store'});
      if (!resp.ok) throw new Error('No se pudo cargar products JSON');
      products = await resp.json();
      // attach an index id matching folder numbering (1-based)
      index = products.map((p,i) => ({ id: i+1, text: textForProduct(p,i), raw: p }));
      console.debug('Search: cargado productsInfo.json, productos:', products.length);
    }catch(err){
      console.warn('Search: error cargando products JSON desde', SEARCH_JSON, err);
      // Fallback: if global products API exists, use it
      if (window.__DA_PRODUCTS && Array.isArray(window.__DA_PRODUCTS._loadedProducts)){
        try{
          const p = window.__DA_PRODUCTS._loadedProducts;
          products = p;
          index = products.map((prod,i) => ({ id: i+1, text: textForProduct(prod,i), raw: prod }));
          console.debug('Search: indexado productos desde window.__DA_PRODUCTS._loadedProducts');
          return;
        }catch(e){ console.warn('Search: error leyendo window.__DA_PRODUCTS._loadedProducts', e); }
      }
      // Fallback 2: try to read rendered product cards in DOM (if products.js already rendered them)
      const domProducts = [];
      const grid = document.querySelectorAll('.products-grid .product');
      if (grid && grid.length){
        grid.forEach((card, idx) => {
          const titleEl = card.querySelector('.title');
          const metaEl = card.querySelector('.meta');
          const title = titleEl ? titleEl.textContent.trim() : `Producto ${idx+1}`;
          const meta = metaEl ? metaEl.textContent.trim() : '';
          domProducts.push({ nombre: title, codigo: meta.split('•')[0] ? meta.split('•')[0].trim() : '', categoria: '', descripcion_e_informacion_breve_del_producto: meta });
        });
      }
      if (domProducts.length){
        products = domProducts;
        index = products.map((p,i) => ({ id: i+1, text: textForProduct(p,i), raw: p }));
        console.debug('Search: indexado productos desde DOM, encontrados:', domProducts.length);
      } else {
        products = [];
        index = [];
      }
    }
  }

  // Index page sections (headings with ids) and FAQ items
  function indexPageContent(){
    const items = [];
    // Sections by id: look for top-level sections with id
    document.querySelectorAll('main section[id]').forEach(sec => {
      const id = sec.id;
      // Prefer H2 or H1 text as title
      const heading = sec.querySelector('h2, h1');
      const title = heading ? heading.textContent.trim() : id;
      const text = (sec.textContent || '').trim().replace(/\s+/g,' ');
      items.push({ type: 'section', id, title, text, target: `#${id}` });
    });

    // FAQ items: .faq .item strong (question) and p (answer)
    document.querySelectorAll('#faq .faq .item, #faq .item').forEach((it, idx) => {
      const q = it.querySelector('strong') ? it.querySelector('strong').textContent.trim() : `Pregunta ${idx+1}`;
      const a = it.querySelector('p') ? it.querySelector('p').textContent.trim() : '';
      items.push({ type: 'faq', id: `faq-${idx+1}`, title: q, text: q + ' ' + a, target: '#faq' });
    });

    pageIndex = items.map((p,i)=>({ id: `page-${i+1}`, type: p.type, title: p.title, text: (p.text||'').toLowerCase(), raw: p, target: p.target }));
    console.debug('Search: indexado contenido de la página, elementos:', pageIndex.length);
  }

  function createResultsContainer(){
    if (resultsContainer) return resultsContainer;
  const box = document.createElement('div');
  box.className = 'search-results scrollable-panel';
    // basic styles so it appears under the header input
    box.style.position = 'absolute';
    box.style.minWidth = '220px';
  box.style.maxWidth = '520px';
  box.style.background = 'white';
  box.style.border = '1px solid rgba(0,0,0,0.08)';
  box.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
  box.style.zIndex = '1200';
  box.style.padding = '8px';
  box.style.display = 'none';
  // make results scrollable to allow many results without growing the page
  box.style.maxHeight = '56vh';
  box.style.overflowY = 'auto';
  box.style.overflowX = 'hidden';
  box.style.borderRadius = '8px';
    box.setAttribute('role','listbox');
    document.body.appendChild(box);
    resultsContainer = box;
    // click outside to close
    document.addEventListener('click', (e)=>{ if (!box.contains(e.target) && !getSearchInput().contains(e.target)) hideResults(); });
    return box;
  }

  function getSearchInput(){
    return document.querySelector('.search-box input[type="search"]') || document.querySelector('.search-box input');
  }

  function positionResults(){
    const input = getSearchInput();
    const box = createResultsContainer();
    if (!input) return;
    const rect = input.getBoundingClientRect();
    const viewportW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // On small screens, make the results full-width (minus small padding) and position under header
    if (viewportW <= 700){
      const pad = 12;
      const maxW = viewportW - pad*2;
      box.style.left = pad + 'px';
      box.style.width = maxW + 'px';
      box.style.top = (rect.bottom + window.scrollY + 8) + 'px';
    } else {
      // try to keep the box aligned to the input, but prevent overflow on the right
      const preferredLeft = rect.left + window.scrollX;
      const preferredWidth = Math.min(rect.width, 520);
      let left = preferredLeft;
      // if it would overflow, shift left
      if (left + preferredWidth > viewportW - 12) left = Math.max(12, viewportW - preferredWidth - 12);
      box.style.left = left + 'px';
      box.style.top = (rect.bottom + window.scrollY + 6) + 'px';
      box.style.width = preferredWidth + 'px';
    }
  }

  function renderResults(items){
    const box = createResultsContainer();
    box.innerHTML = '';
    if (!items || !items.length){
      const empty = document.createElement('div');
      empty.textContent = 'No se encontraron resultados';
      empty.style.padding = '10px';
      empty.style.color = '#666';
      box.appendChild(empty);
      showResults();
      return;
    }
    // allow more results but keep a reasonable cap
    const MAX_RESULTS = 40;
    items.slice(0, MAX_RESULTS).forEach((it, i)=>{
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'search-result-item';
      row.setAttribute('role','option');
      row.dataset.resultIndex = i;
      row.style.display = 'flex';
      row.style.flexDirection = 'column';
      row.style.alignItems = 'flex-start';
      row.style.width = '100%';
      row.style.border = '0';
      row.style.background = 'transparent';
  // larger, touch-friendly rows
  row.style.padding = '12px 14px';
  row.style.textAlign = 'left';
  row.style.cursor = 'pointer';
  row.style.borderRadius = '6px';
  row.style.marginBottom = '6px';

      const title = document.createElement('div');
  title.style.fontWeight = '800';
  title.style.fontSize = '16px';
  const meta = document.createElement('div');
  meta.style.fontSize = '13px';
  meta.style.opacity = '0.85';
  meta.style.marginTop = '6px';

      if (it.type === 'product'){
        title.textContent = it.raw.nombre || 'Producto';
        meta.textContent = [it.raw.codigo, it.raw.categoria, it.raw.talla].filter(Boolean).join(' • ');
      } else if (it.type === 'section'){
        title.textContent = it.title || 'Sección';
        meta.textContent = `Sección • ${it.target}`;
      } else if (it.type === 'faq'){
        title.textContent = it.title || 'Pregunta frecuente';
        meta.textContent = `FAQ • ${it.target}`;
      } else {
        title.textContent = it.title || (it.raw && it.raw.nombre) || 'Resultado';
        meta.textContent = '';
      }

      // type badge
      const badge = document.createElement('span');
      badge.textContent = (it.type || 'item').toUpperCase();
  badge.style.fontSize = '11px';
  badge.style.padding = '6px 8px';
      badge.style.borderRadius = '999px';
      badge.style.background = 'rgba(0,0,0,0.06)';
      badge.style.color = '#222';
      badge.style.marginBottom = '6px';
  badge.style.fontWeight = '800';

      row.appendChild(badge);
      row.appendChild(title);
      if (meta.textContent) row.appendChild(meta);

      row.addEventListener('click', ()=>{ onSelectResult(it); });
      box.appendChild(row);
    });
    activeIndex = -1;
    showResults();
  }

  function showResults(){
    positionResults();
    resultsContainer.style.display = 'block';
  }
  function hideResults(){ if (resultsContainer) resultsContainer.style.display = 'none'; }
  function clearSearch(){
    const input = getSearchInput();
    if (input){ input.value = ''; input.blur(); input.dispatchEvent(new Event('input')); }
  }

  function onSelectResult(item){
    if (!item) return;
    if (item.type === 'product'){
      const idx = (item.id || 0) - 1;
      if (window.__DA_PRODUCTS && typeof window.__DA_PRODUCTS.openProductModalByIndex === 'function'){
        window.__DA_PRODUCTS.openProductModalByIndex(idx);
        hideResults();
          clearSearch();
        return;
      }
      const grid = document.querySelector('.products-grid');
      if (grid){
        const card = grid.querySelectorAll('.product')[idx];
        if (card){
          card.scrollIntoView({behavior:'smooth', block:'center'});
          card.classList.add('highlight');
          setTimeout(()=>card.classList.remove('highlight'), 2400);
        }
      }
      hideResults();
        clearSearch();
      return;
    }

    if (item.type === 'section'){
      try{
        const target = document.querySelector(item.target);
        if (target){
          target.scrollIntoView({behavior:'smooth', block:'start'});
          target.classList.add('highlight');
          setTimeout(()=>target.classList.remove('highlight'), 2000);
        }
      }catch(e){ console.warn('Search: error navegando a seccion', e); }
      hideResults();
        clearSearch();
      return;
    }

    if (item.type === 'faq'){
      try{
        const target = document.querySelector(item.target || '#faq');
        if (target){
          target.scrollIntoView({behavior:'smooth', block:'center'});
          target.classList.add('highlight');
          setTimeout(()=>target.classList.remove('highlight'), 2000);
        }
      }catch(e){ console.warn('Search: error navegando a FAQ', e); }
      hideResults();
        clearSearch();
      return;
    }

    // fallback: if item has target, navigate
    if (item.target){
      const t = document.querySelector(item.target);
      if (t) t.scrollIntoView({behavior:'smooth', block:'center'});
    }
    hideResults();
      clearSearch();
  }

  function searchQuery(q){
    if (!q || !q.trim()) return [];
    const t = q.toLowerCase().trim();
    const results = [];
    // search products
    const prodMatches = index.filter(i => (i.raw && ((i.raw.nombre||'')+(i.raw.codigo||'')+(i.raw.categoria||'')).toLowerCase()).includes(t));
    prodMatches.forEach(p => results.push(Object.assign({ type: 'product' }, p)));
    // search page content
    const pageMatches = pageIndex.filter(p => p.text.includes(t));
    pageMatches.forEach(p => results.push(Object.assign({ type: p.type }, p)));
    return results;
  }

  function debounce(fn, ms){ let timer = null; return function(...args){ clearTimeout(timer); timer = setTimeout(()=>fn.apply(this,args), ms); }; }

  function wireInput(){
    const input = getSearchInput();
    if (!input) return;
    const dSearch = debounce(async function(){
      const v = input.value || '';
      if (!v.trim()) { hideResults(); return; }
      const results = searchQuery(v);
      renderResults(results);
    }, DEBOUNCE_MS);

    input.addEventListener('input', dSearch);
    input.addEventListener('focus', ()=>{ positionResults(); if (input.value && input.value.trim()) renderResults(searchQuery(input.value)); });
    input.addEventListener('keydown', (e)=>{
      if (!resultsContainer || resultsContainer.style.display === 'none') return;
      const items = Array.from(resultsContainer.querySelectorAll('.search-result-item'));
      if (e.key === 'ArrowDown'){ e.preventDefault(); activeIndex = Math.min(activeIndex+1, items.length-1); updateActive(items); }
      else if (e.key === 'ArrowUp'){ e.preventDefault(); activeIndex = Math.max(activeIndex-1, 0); updateActive(items); }
      else if (e.key === 'Enter'){ e.preventDefault(); if (activeIndex >=0 && items[activeIndex]) items[activeIndex].click(); else if (items.length===1) items[0].click(); }
      else if (e.key === 'Escape'){ hideResults(); }
    });
    window.addEventListener('resize', positionResults);
    window.addEventListener('scroll', positionResults);
  }

  function updateActive(items){ items.forEach((it,i)=>{ it.style.background = i===activeIndex ? 'rgba(0,0,0,0.06)' : 'transparent'; }); if (items[activeIndex]) items[activeIndex].focus(); }

  // init
  async function init(){
    await loadProducts();
    // index page after products loaded
    indexPageContent();
    createResultsContainer();
    wireInput();
    // Expose a global helper to search programmatically
    window.__DA_SEARCH = { searchQuery, openResult: onSelectResult };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

})();
