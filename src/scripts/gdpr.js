/**
 * GDPR Cookie Consent Module
 * @module gdpr
 * @description Handles GDPR-compliant cookie consent management
 */

'use strict';

const CONSENT_KEY = 'ecopolis_cookie_consent';
const CONSENT_VERSION = '1.0';

/**
 * Check if user has given consent
 * @returns {boolean} True if consent has been given
 */
function hasConsent() {
  try {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) return false;

    const data = JSON.parse(consent);
    return data.version === CONSENT_VERSION && data.accepted === true;
  } catch (error) {
    console.error('Error checking consent:', error);
    return false;
  }
}

/**
 * Save user consent
 * @param {boolean} accepted - Whether user accepted cookies
 */
function saveConsent(accepted) {
  try {
    const data = {
      accepted,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving consent:', error);
  }
}

/**
 * Create and display cookie consent banner
 */
function showConsentBanner() {
  const banner = document.createElement('div');
  banner.id = 'cookie-consent-banner';
  banner.className = 'cookie-consent-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Συναίνεση Cookies');
  banner.setAttribute('aria-describedby', 'cookie-consent-text');

  banner.innerHTML = `
    <div class="cookie-consent-content">
      <div class="cookie-consent-text" id="cookie-consent-text">
        <h3>🍪 Χρήση Cookies</h3>
        <p>
          Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας.
          Χρησιμοποιούμε επίσης υπηρεσίες τρίτων (Google Fonts, Facebook Messenger)
          που ενδέχεται να χρησιμοποιούν cookies.
          <a href="/terms.html" target="_blank" rel="noopener">Μάθετε περισσότερα</a>
        </p>
      </div>
      <div class="cookie-consent-actions">
        <button type="button" id="cookie-accept" class="btn btn-primary">
          Αποδέχομαι
        </button>
        <button type="button" id="cookie-reject" class="btn btn-outline-secondary">
          Απόρριψη
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  // Handle accept
  document.getElementById('cookie-accept').addEventListener('click', () => {
    saveConsent(true);
    banner.remove();
    enableThirdPartyServices();
  });

  // Handle reject
  document.getElementById('cookie-reject').addEventListener('click', () => {
    saveConsent(false);
    banner.remove();
  });

  // Show banner with animation
  requestAnimationFrame(() => {
    banner.classList.add('show');
  });
}

/**
 * Enable third-party services after consent
 */
function enableThirdPartyServices() {
  // Enable Facebook Messenger if element exists
  const fbChat = document.getElementById('fb-customer-chat');
  if (fbChat && typeof initializeFacebookMessenger === 'function') {
    initializeFacebookMessenger();
  }

  // You can add more third-party service initializations here
  console.log('Third-party services enabled');
}

/**
 * Initialize GDPR consent management
 */
function init() {
  if (hasConsent()) {
    const consent = JSON.parse(localStorage.getItem(CONSENT_KEY));
    if (consent.accepted) {
      enableThirdPartyServices();
    }
  } else {
    // Show banner after a short delay
    setTimeout(showConsentBanner, 1000);
  }
}

// Export for use in other modules
export { hasConsent, saveConsent, init as initGDPR };

// Auto-initialize if loaded as standalone script
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
