// Small helper to download the catalog via fetch and save with a friendly filename
(function(){
  function downloadBlob(blob, filename){
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  function handleClick(e){
    var el = e.currentTarget;
    // If the link is meant to open in a new tab, don't intercept — let the browser handle it.
    var targetAttr = (el.getAttribute('target') || '').toLowerCase();
    if (targetAttr === '_blank') {
      // allow default behavior (open in new tab)
      return;
    }
    var href = el.getAttribute('href');
    var filename = el.getAttribute('download') || 'catalogo-dickies.pdf';

    // Try to fetch the file and download via blob.
    // If fetch fails (CORS, network), allow natural navigation as fallback.
  e.preventDefault();

    // Use keepalive for better chances on page unload; fetch normally otherwise.
    fetch(href, {method: 'GET', credentials: 'same-origin'}).then(function(resp){
      if(!resp.ok) throw new Error('Network response was not ok');
      return resp.blob();
    }).then(function(blob){
      downloadBlob(blob, filename);
    }).catch(function(err){
      // fallback: navigate to href so the browser can handle download
      console.warn('Download via fetch failed, falling back to href navigation', err);
      window.location.href = href;
    });
  }

  function init(){
    var el = document.getElementById('catalogDownload');
    if(!el) return;
    el.addEventListener('click', handleClick);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
