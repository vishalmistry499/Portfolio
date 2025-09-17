// Initialize portfolio functionality
function initPortfolio() {
  updateFooterYear();
  setupScrollAnimations();
  setupBackToTop();
  setupEmailCopy();
  setupProjectFilters();
  setupSmoothScroll();
<<<<<<< Updated upstream
=======
  addProgressiveEnhancements();
  setupOptimizedAnimations();
>>>>>>> Stashed changes
}

// Update footer with current year
function updateFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Setup scroll-triggered animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(handleElementIntersection, { 
    threshold: 0.12 
  });
  
  document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
  });
}

function handleElementIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}

// Setup back to top button
function setupBackToTop() {
  const backToTopButton = document.getElementById('toTop');
  if (!backToTopButton) return;

  window.addEventListener('scroll', () => {
    toggleBackToTopVisibility(backToTopButton);
  });

  backToTopButton.addEventListener('click', scrollToTop);
}

function toggleBackToTopVisibility(button) {
  const shouldShow = window.scrollY > 600;
  button.style.display = shouldShow ? 'block' : 'none';
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enhanced Email Copy with Better Error Handling - IMPROVEMENT
async function enhancedCopyEmail() {
  const email = 'vishalmistry499@gmail.com';
  
  try {
    await navigator.clipboard.writeText(email);
    enhancedShowToast('Email copied to clipboard!', 'success');
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      enhancedShowToast('Email copied to clipboard!', 'success');
    } catch (fallbackErr) {
      enhancedShowToast('Please copy manually: ' + email, 'info');
    }
    
    document.body.removeChild(textArea);
  }
}

// Setup email copy functionality
function setupEmailCopy() {
  const copyButton = document.getElementById('copyEmail');
  if (!copyButton) return;

  copyButton.addEventListener('click', enhancedCopyEmail);
}

<<<<<<< Updated upstream
async function copyEmailToClipboard() {
  const email = 'vishalmistry499@gmail.com';
  
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy email:', err);
    showToast('Failed to copy email.', true);
=======
// Better Toast Notifications - IMPROVEMENT
function enhancedShowToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
>>>>>>> Stashed changes
  }

<<<<<<< Updated upstream
function showToast(message, isError = false) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

=======
>>>>>>> Stashed changes
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
<<<<<<< Updated upstream
  // Set a different style for error messages if needed
  if (isError) {
    toast.style.backgroundColor = '#fca5a5';
    toast.style.color = '#7f1d1d';
  }

  toastContainer.appendChild(toast);

  // Add a slight delay before showing to trigger the transition
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Remove the toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    // After the fade-out transition, remove the element
    toast.addEventListener('transitionend', () => {
      toast.remove();
      if (toastContainer.children.length === 0) {
        toastContainer.remove();
      }
    });
  }, 3000);
}

=======
  if (type === 'success') {
    toast.style.background = 'linear-gradient(135deg, var(--accent-3, #10b981), var(--accent))';
    toast.style.color = 'white';
  }

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Legacy toast function for backward compatibility
function showToast(message, isError = false) {
  const type = isError ? 'error' : 'info';
  enhancedShowToast(message, type);
}

// Enhanced Project Filtering with Smooth Transitions - IMPROVEMENT
function enhancedFilterProjects(filterType) {
  const projectCards = document.querySelectorAll('#projectGrid .card');
  
  projectCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    if (filterType === 'all') {
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
      card.style.display = '';
    } else {
      const cardTags = card.getAttribute('data-tags') || '';
      if (cardTags.includes(filterType)) {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.display = '';
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        setTimeout(() => card.style.display = 'none', 300);
      }
    }
  });
}
>>>>>>> Stashed changes

// Setup project filtering
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => handleFilterClick(button, filterButtons));
  });
}

function handleFilterClick(clickedButton, allButtons) {
  setActiveFilter(clickedButton, allButtons);
  enhancedFilterProjects(clickedButton.dataset.filter);
}

function setActiveFilter(activeButton, allButtons) {
  allButtons.forEach(button => button.classList.remove('active'));
  activeButton.classList.add('active');
}

// Legacy filter function for backward compatibility
function filterProjects(filterType) {
<<<<<<< Updated upstream
  const projectCards = document.querySelectorAll('#projectGrid .card');
  
  projectCards.forEach(card => {
    if (filterType === 'all') {
      card.style.display = '';
    } else {
      const cardTags = card.getAttribute('data-tags') || '';
      card.style.display = cardTags.includes(filterType) ? '' : 'none';
    }
  });
=======
  enhancedFilterProjects(filterType);
>>>>>>> Stashed changes
}

// Setup smooth scrolling for anchor links
function setupSmoothScroll() {
  const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', handleAnchorClick);
  });
}

function handleAnchorClick(event) {
  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  
  if (targetElement) {
    event.preventDefault();
    targetElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
}

<<<<<<< Updated upstream
=======
// Progressive Enhancement Features - NEW IMPROVEMENT
function addProgressiveEnhancements() {
  // Intersection Observer for better performance
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(handleElementIntersection, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('visible');
    });
  }
  
  // Preload critical resources
  const criticalImages = ['assets/vishal-photo.png'];
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Performance-Optimized Scroll Animations - NEW IMPROVEMENT
function setupOptimizedAnimations() {
  let ticking = false;
  
  function updateAnimations() {
    const scrolled = window.pageYOffset;
    const backBtn = document.getElementById('toTop');
    
    if (backBtn) {
      backBtn.style.display = scrolled > 400 ? 'block' : 'none';
    }
    
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateAnimations);
      ticking = true;
    }
  });
}

// Enhanced Form Validation - NEW FEATURE (for future contact form)
function validateContactForm(formData) {
  const errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!formData.name || formData.name.length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  if (!emailRegex.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!formData.message || formData.message.length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  
  return errors;
}

// Enhanced button interactions - NEW IMPROVEMENT
function setupButtonInteractions() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add loading state briefly for better UX
      const originalText = this.textContent;
      
      if (this.id === 'copyEmail') {
        this.classList.add('loading');
        this.textContent = 'Copying...';
        
        setTimeout(() => {
          this.classList.remove('loading');
          this.textContent = originalText;
        }, 1000);
      }
    });
  });
}

// Animate skill progress bars on scroll - NEW FEATURE
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.progress');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const width = progress.style.width;
        progress.style.width = '0%';
        
        setTimeout(() => {
          progress.style.width = width;
        }, 200);
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillBars.forEach(bar => observer.observe(bar));
}

// Enhanced initialization with new features
function initPortfolioEnhanced() {
  initPortfolio();
  setupButtonInteractions();
  animateSkillBars();
  
  // Add fade-in animation to main content
  document.body.classList.add('fade-in');
  
  // Log successful initialization
  console.log('Portfolio enhanced features loaded successfully');
}

// Error handling for production
window.addEventListener('error', function(e) {
  console.error('Portfolio error:', e.error);
  
  // Show user-friendly error message
  if (typeof enhancedShowToast === 'function') {
    enhancedShowToast('Something went wrong. Please refresh if issues persist.', 'error');
  }
});

// Performance monitoring
window.addEventListener('load', function() {
  if ('performance' in window) {
    const loadTime = performance.now();
    console.log(`Portfolio loaded in ${Math.round(loadTime)}ms`);
  }
});

>>>>>>> Stashed changes
// Start everything when page loads
document.addEventListener('DOMContentLoaded', initPortfolioEnhanced);