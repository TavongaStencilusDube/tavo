// script.js

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  // Section observer for animation triggers
  const sections = document.querySelectorAll('.section');
  createSectionObserver();

  // Header scroll effect
  window.addEventListener('scroll', stickyHeader);

  // Skill items hover effect
  const skillItems = document.querySelectorAll('.skills-list li');
  skillItems.forEach(item => {
    item.addEventListener('mouseover', skillHover);
    item.addEventListener('mouseout', skillHoverEnd);
  });

  // Contact form validation
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});

// Smooth scroll function
function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Intersection Observer for section animations
function createSectionObserver() {
  const options = {
    threshold: 0.25
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, options);

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
}

// Sticky header effect
function stickyHeader() {
  const header = document.querySelector('.site-header');
  const scrollPosition = window.scrollY;
  const homeHeight = document.querySelector('#home').offsetHeight;

  if (scrollPosition > homeHeight * 0.8) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Skill item interactions
function skillHover() {
  this.style.transform = 'translateY(-5px)';
  this.style.boxShadow = '0 10px 20px rgba(0, 255, 136, 0.2)';
}

function skillHoverEnd() {
  this.style.transform = 'translateY(0)';
  this.style.boxShadow = 'none';
}

// Form handling
function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    showFormError('Please fill in all fields');
    return;
  }

  showFormSuccess('Message sent successfully!');
  this.reset();
}

function showFormError(message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'form-error';
  errorElement.textContent = message;
  document.querySelector('#contact').appendChild(errorElement);
  setTimeout(() => errorElement.remove(), 3000);
}

function showFormSuccess(message) {
  const successElement = document.createElement('div');
  successElement.className = 'form-success';
  successElement.textContent = message;
  document.querySelector('#contact').appendChild(successElement);
  setTimeout(() => successElement.remove(), 3000);
}

// Optional: Dark mode toggle
function initThemeToggle() {
  const themeButton = document.createElement('button');
  themeButton.className = 'theme-toggle';
  themeButton.innerHTML = '🌓';
  document.body.appendChild(themeButton);

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
}

// Initialize theme toggle if needed
// initThemeToggle();
