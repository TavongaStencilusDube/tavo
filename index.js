// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  // Section observer for animation triggers
  createSectionObserver();

  // Header scroll effect
  window.addEventListener('scroll', stickyHeader);

  // Skill category hover effects
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(category => {
    category.addEventListener('mouseenter', skillHover);
    category.addEventListener('mouseleave', skillHoverEnd);
  });
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
  const options = { threshold: 0.25 };
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

  header.classList.toggle('scrolled', scrollPosition > homeHeight * 0.8);
}

// Skill category interactions
function skillHover() {
  this.style.transform = 'translateY(-5px)';
  this.style.boxShadow = '0 10px 20px rgba(0, 255, 136, 0.2)';
}

function skillHoverEnd() {
  this.style.transform = 'translateY(0)';
  this.style.boxShadow = 'none';
}

// Removed form handling functions since there's no form in current HTML
// Removed theme toggle functions (can be uncommented if needed)
