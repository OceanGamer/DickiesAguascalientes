// Navigation and mobile menu behaviors
(function(){
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobile = document.getElementById('closeMobile');

  function safeLockScroll(){ if (window.__DA_UI && window.__DA_UI.safeLockScroll) return window.__DA_UI.safeLockScroll(); }
  function safeUnlockScroll(){ if (window.__DA_UI && window.__DA_UI.safeUnlockScroll) return window.__DA_UI.safeUnlockScroll(); }

  function showMobile(){ if(!mobileMenu) return; mobileMenu.classList.add('open'); mobileMenu.setAttribute('aria-hidden','false'); safeLockScroll(); }
  function hideMobile(){ if(!mobileMenu) return; mobileMenu.classList.remove('open'); mobileMenu.setAttribute('aria-hidden','true'); safeUnlockScroll(); }

  if (menuToggle){
    menuToggle.addEventListener('click', showMobile);
  }
  if (closeMobile){ closeMobile.addEventListener('click', hideMobile); }
  if (mobileMenu){ mobileMenu.addEventListener('click', (e)=>{ if (e.target === mobileMenu) hideMobile(); }); }

  function mqlChanged(){
    if(window.matchMedia('(max-width:700px)').matches){ if(menuToggle) menuToggle.style.display='inline-block'; }
    else { if(menuToggle) menuToggle.style.display='none'; hideMobile(); }
  }
  window.addEventListener('resize', mqlChanged);
  mqlChanged();

  // Smooth anchors and close mobile on navigation
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      // guard: require an id selector like #foo
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target){
        e.preventDefault();
        // If mobile menu is open, close it first so body is unlocked and scrolling works.
        const isMobile = window.matchMedia('(max-width:700px)').matches;
        if (isMobile && mobileMenu && mobileMenu.classList.contains('open')){
          // Close mobile menu (this will call safeUnlockScroll)
          hideMobile();
          // Defer the scroll until after the UI changes have applied and body is unlocked
          if (window.requestAnimationFrame){
            requestAnimationFrame(()=>{ requestAnimationFrame(()=> target.scrollIntoView({behavior:'smooth', block:'start'})); });
          } else {
            // Fallback small timeout
            setTimeout(()=> target.scrollIntoView({behavior:'smooth', block:'start'}), 60);
          }
        } else {
          target.scrollIntoView({behavior:'smooth', block:'start'});
          if(isMobile) hideMobile();
        }
      }
    });
  });

  // Accessibility: show mega on focus
  document.querySelectorAll('.nav-item').forEach(item=>{
    item.addEventListener('focusin', ()=> { const mega = item.querySelector('.mega'); if(mega) mega.style.display = 'flex'; });
    item.addEventListener('focusout', ()=> { const mega = item.querySelector('.mega'); if(mega) mega.style.display = ''; });
  });

})();
