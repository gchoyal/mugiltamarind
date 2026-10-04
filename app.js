/**
 * Mugil Tamarind - Clean Portal Scripts
 * WhatsApp & Phone: +91 94421 77026
 * Address: 4/959 Teachers Colony, Vennampatti Road, Dharmapuri - 636701, Tamil Nadu
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initContactForm();
});

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// Quick WhatsApp Inquiry for individual products
function orderProductWhatsApp(productName, defaultPack) {
  const msg = `Hello Elavarasan (Mugil Tamarind),%0A%0AI would like to inquire about pricing and supply for:%0A*Product:* ${encodeURIComponent(productName)}%0A*Packaging:* ${encodeURIComponent(defaultPack)}%0A%0APlease share wholesale price list and availability. Thank you!`;
  window.open(`https://wa.me/919442177026?text=${msg}`, '_blank');
}

// Clean Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const product = document.getElementById('form-product').value;
    const qty = document.getElementById('form-qty').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !phone) {
      showToast('Please enter your name and phone number', 'error');
      return;
    }

    const text = `New Inquiry - Mugil Tamarind Website:%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Product:* ${encodeURIComponent(product)}%0A*Quantity Required:* ${encodeURIComponent(qty || 'Not specified')}%0A*Message:* ${encodeURIComponent(message || 'Please send pricing details')}`;

    showToast('Redirecting to WhatsApp...', 'success');
    setTimeout(() => {
      window.open(`https://wa.me/919442177026?text=${text}`, '_blank');
      form.reset();
    }, 800);
  });
}

function showToast(message, type = 'info') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-lg shadow-xl text-white text-xs font-semibold';
    document.body.appendChild(toast);
  }

  toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-lg shadow-xl text-white text-xs font-semibold ' + 
    (type === 'success' ? 'bg-[#15803d]' : type === 'error' ? 'bg-red-600' : 'bg-[#4a2211]');
  
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
