// The ultra-dark mode injection script
function applyUltraDarkMode() {
  // Create the stylesheet
  const style = document.createElement('style');
  style.textContent = `
    * {
      background-color: #0a0a0a !important;
      color: #1a1a1a !important;
      border-color: #0f0f0f !important;
    }

    /* Barely visible text for some contrast */
    body, p, div, span, a, h1, h2, h3, h4, h5, h6, li, td, th {
      color: #0d0d0d !important;
    }

    /* Dark backgrounds */
    html {
      background-color: #000000 !important;
    }

    /* Images get the full treatment */
    img {
      filter: brightness(0.2) contrast(1.2) !important;
      opacity: 0.15 !important;
    }

    /* Videos too */
    video {
      filter: brightness(0.1) !important;
      opacity: 0.1 !important;
    }

    /* Input fields are basically invisible */
    input, textarea, select {
      background-color: #0a0a0a !important;
      color: #0a0a0a !important;
      border: 1px solid #050505 !important;
    }

    /* Buttons vanish into the void */
    button {
      background-color: #0a0a0a !important;
      color: #0a0a0a !important;
      border: 1px solid #050505 !important;
    }

    /* Links disappear */
    a {
      color: #0a0a0a !important;
    }

    /* Shadows are invisible */
    * {
      box-shadow: none !important;
      text-shadow: none !important;
    }

    /* SVG elements get darkened */
    svg, svg * {
      fill: #0a0a0a !important;
      stroke: #0a0a0a !important;
    }

    /* Canvas elements are dark */
    canvas {
      filter: brightness(0.1) !important;
    }
  `;

  // Try to inject at the earliest possible moment
  if (document.head) {
    document.head.appendChild(style);
  } else {
    document.documentElement.appendChild(style);
  }
}

// Apply immediately if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyUltraDarkMode);
} else {
  applyUltraDarkMode();
}

// Also watch for dynamically added content
const observer = new MutationObserver(() => {
  // Reapply styles to new elements (optional, but helps with dynamic content)
  document.querySelectorAll('*').forEach(el => {
    if (!el.style.backgroundColor) {
      el.style.backgroundColor = '#0a0a0a';
    }
  });
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: false
});
