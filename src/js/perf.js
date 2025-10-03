// Performance utilities and lazy asset loading
(function(){
  // schedIdle: wrapper around requestIdleCallback with timeout fallback
  function schedIdle(cb, options){
    if ('requestIdleCallback' in window){
      try{ return requestIdleCallback(cb, options || {timeout:200}); }catch(e){}
    }
    return setTimeout(()=>{ cb({didTimeout:false,timeRemaining:()=>0}); }, options && options.timeout || 200);
  }

  // simple util to determine if device is likely slow (save data, reduced motion, low-end CPU hints)
  function isLikelySlowDevice(){
    try{
      if (navigator.connection){
        const conn = navigator.connection;
        if (conn.saveData) return true;
        if (conn.effectiveType){
          // treat 2g and slow-2g as slow
          if (/2g/.test(conn.effectiveType)) return true;
        }
      }
      if (navigator.deviceMemory && navigator.deviceMemory < 1) return true;
    }catch(e){}
    return false;
  }

  // Lazy-load hero video: attach <source> when video is near viewport or on user interaction
  function initHeroLazyLoad(){
    const vid = document.getElementById('heroBg');
    if (!vid) return;
    const src = vid.dataset && vid.dataset.src;
    if (!src) return;

    let loaded = false;
    function loadVideo(){
      if (loaded) return; loaded = true;
      // guard: don't load on slow devices
      if (isLikelySlowDevice()) return;
      const source = document.createElement('source');
      source.src = src;
      source.type = 'video/mp4';
      vid.appendChild(source);
      // attempt to play after source is loaded
      vid.preload = 'auto';
      // play only after user gesture or when allowed (mute ensures autoplay works on most browsers)
      const tryPlay = ()=>{ vid.play().catch(()=>{}); };
      // wait a tick for the source to be processed
      setTimeout(tryPlay, 200);
    }

    // Load on user interaction (touchstart/click/scroll)
    const uiHandler = ()=>{ loadVideo(); removeListeners(); };
    function removeListeners(){ document.removeEventListener('click', uiHandler); document.removeEventListener('touchstart', uiHandler); document.removeEventListener('scroll', uiHandler); }
    document.addEventListener('click', uiHandler, {passive:true});
    document.addEventListener('touchstart', uiHandler, {passive:true});
    document.addEventListener('scroll', uiHandler, {passive:true});

    // Also load when the video is near viewport (IntersectionObserver)
    if ('IntersectionObserver' in window){
      const io = new IntersectionObserver((entries, obs)=>{
        entries.forEach(en=>{ if (en.isIntersecting) { loadVideo(); obs.disconnect(); removeListeners(); } });
      }, {rootMargin: '500px 0px 500px 0px', threshold: 0.01});
      io.observe(vid);
    } else {
      // fallback: schedule during idle
      schedIdle(()=> loadVideo(), {timeout:1000});
    }
  }

  // Expose small API
  window.__DA_PERF = { schedIdle, isLikelySlowDevice };

  // Auto init on DOMContentLoaded
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeroLazyLoad); else initHeroLazyLoad();

})();
