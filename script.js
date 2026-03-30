// Mobile menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
    mobileBtn.textContent = '☰';
  } else {
    mobileMenu.style.display = 'flex';
    mobileBtn.textContent = '✕';
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      // Fecha menu mobile se aberto
      if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        mobileBtn.textContent = '☰';
      }
    }
  });
});

// Fake cart count (pode expandir depois)
let cartCount = 0;
document.getElementById('cart-count').textContent = cartCount;

// Animação de fade-in ao scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section, .product-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});

console.log('%c✅ OltreMare website carregado com luxo italiano.', 'color:#C9A96E; font-family:Playfair Display; font-size:13px;');