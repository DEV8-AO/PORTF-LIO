(function() {
  let lastScroll = 0;
  const header = document.querySelector('.out') || document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    const current = window.pageYOffset || document.documentElement.scrollTop;

    if (current > lastScroll && current > 50) {
   
      header.classList.add('hidden');
    } else if (current < lastScroll) {
  
      header.classList.remove('hidden');
    }

    lastScroll = current <= 0 ? 0 : current;
  }, { passive: true });
})();