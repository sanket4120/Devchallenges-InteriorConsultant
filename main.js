window.addEventListener('load', () => {
  let menu = document.getElementById('menu');
  let close = document.getElementById('close');
  let nav = document.getElementById('mobile-nav');
  menu.addEventListener('click', () => {
    nav.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  });
  close.addEventListener('click', () => {
    nav.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  });

  window.addEventListener('resize', (e) => {
    if (window.innerWidth > 800) {
      nav.style.display = 'none';
    }
  });
});
