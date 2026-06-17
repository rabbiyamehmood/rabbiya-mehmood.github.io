// ===== THEME TOGGLE =====
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  const btn = document.querySelector('.theme-toggle');
  if (body.classList.contains('dark-mode')) {
    btn.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    btn.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.querySelector('.theme-toggle');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (btn) btn.innerHTML = '☀️';
  } else {
    if (btn) btn.innerHTML = '🌙';
  }
});

// ===== MOBILE MENU TOGGLE =====
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}

// ===== CLOSE MOBILE MENU ON LINK CLICK =====
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.querySelector('.nav-links');
      if (menu && window.innerWidth <= 768) {
        menu.classList.remove('active');
      }
    });
  });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// ===== CONTACT FORM (Demo) =====
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;
      
      if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon. 😊');
        this.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', function() {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current