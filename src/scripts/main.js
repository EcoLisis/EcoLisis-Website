/**
 * EcoPolis Website - Main JavaScript Module
 * @module main
 * @description Core functionality for the EcoPolis landing page
 * @author Alexandros Kourtis <akourtisdev@gmail.com>
 */

'use strict';

/**
 * Initialize navbar functionality
 * Handles mobile menu collapse and scroll-based navbar styling
 */
function initializeNavbar() {
  const mainNav = document.querySelector('#mainNav');

  if (!mainNav) {
    console.warn('Main navigation element not found');
    return;
  }

  try {
    const navbarCollapse = mainNav.querySelector('.navbar-collapse');

    if (navbarCollapse) {
      // Initialize Bootstrap collapse
      const collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });

      // Close menu when nav items are clicked
      const navbarItems = navbarCollapse.querySelectorAll('a');
      navbarItems.forEach(item => {
        item.addEventListener('click', () => {
          collapse.hide();
        });
      });
    }

    /**
     * Add/remove navbar shrink class based on scroll position
     */
    const handleNavbarScroll = () => {
      const scrollTop = window.pageYOffset ||
                       (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add('navbar-shrink');
      } else {
        mainNav.classList.remove('navbar-shrink');
      }
    };

    // Initial check
    handleNavbarScroll();

    // Listen for scroll events
    document.addEventListener('scroll', handleNavbarScroll, { passive: true });

  } catch (error) {
    console.error('Error initializing navbar:', error);
  }
}

/**
 * Initialize Facebook Messenger Chat Plugin
 */
function initializeFacebookMessenger() {
  try {
    const chatbox = document.getElementById('fb-customer-chat');

    if (!chatbox) {
      return;
    }

    chatbox.setAttribute('page_id', '102843069029400');
    chatbox.setAttribute('attribution', 'biz_inbox');

    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v13.0'
      });
    };

    // Load Facebook SDK
    (function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;

      const js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  } catch (error) {
    console.error('Error initializing Facebook Messenger:', error);
  }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initializeSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Skip empty fragments and #
      if (!href || href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Initialize lazy loading for images
 */
function initializeLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    const images = document.querySelectorAll('img[loading="lazy"]');
    console.log(`Native lazy loading enabled for ${images.length} images`);
  } else {
    // Fallback for browsers that don't support lazy loading
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
}

/**
 * Register service worker for PWA functionality
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/src/scripts/sw.js')
        .then((registration) => {
          console.log('[PWA] Service Worker registered:', registration.scope);

          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            console.log('[PWA] New Service Worker found');

            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New service worker available, prompt user to reload
                if (confirm('Νέα έκδοση διαθέσιμη! Θέλετε να κάνετε refresh;')) {
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  window.location.reload();
                }
              }
            });
          });
        })
        .catch((error) => {
          console.error('[PWA] Service Worker registration failed:', error);
        });
    });
  }
}

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
  console.log('EcoPolis Website initialized');

  initializeNavbar();
  initializeSmoothScroll();
  initializeLazyLoading();
  registerServiceWorker();

  // Only initialize Facebook Messenger on index page
  if (document.getElementById('fb-customer-chat')) {
    initializeFacebookMessenger();
  }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for potential module usage
export { initializeNavbar, initializeSmoothScroll, initializeLazyLoading };
