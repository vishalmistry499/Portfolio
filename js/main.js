// Initialize portfolio functionality
function initPortfolio() {
  updateFooterYear();
  setupScrollAnimations();
  setupBackToTop();
  setupEmailCopy();
  setupProjectFilters();
  setupSmoothScroll();
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

// Setup email copy functionality
function setupEmailCopy() {
  const copyButton = document.getElementById('copyEmail');
  if (!copyButton) return;

  copyButton.addEventListener('click', copyEmailToClipboard);
}

async function copyEmailToClipboard() {
  const email = 'vishalmistry499@gmail.com';
  
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy email:', err);
    showToast('Failed to copy email.', true);
  }
}

function showToast(message, isError = false) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
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


// Setup project filtering
function setupProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => handleFilterClick(button, filterButtons));
  });
}

function handleFilterClick(clickedButton, allButtons) {
  setActiveFilter(clickedButton, allButtons);
  filterProjects(clickedButton.dataset.filter);
}

function setActiveFilter(activeButton, allButtons) {
  allButtons.forEach(button => button.classList.remove('active'));
  activeButton.classList.add('active');
}

function filterProjects(filterType) {
  const projectCards = document.querySelectorAll('#projectGrid .card');
  
  projectCards.forEach(card => {
    if (filterType === 'all') {
      card.style.display = '';
    } else {
      const cardTags = card.getAttribute('data-tags') || '';
      card.style.display = cardTags.includes(filterType) ? '' : 'none';
    }
  });
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

// Start everything when page loads
document.addEventListener('DOMContentLoaded', initPortfolio);
