import './style.css'
import { navigateTo, renderPage } from './router.js'

// Initial layout for the page
document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <a href="/" id="home-link">Home</a>
      <a href="/menu" id="home-link">Menu</a>
      <a href="/about" id="about-link">About</a>
      <a href="/contact" id="contact-link">Contact</a>
    </nav>
  </header>
  <main id="content"></main>  <!-- This section will change dynamically -->
`;

function handleNavigation(event) {
  event.preventDefault();  // Prevent default behavior (full-page reload)
  const path = event.target.getAttribute('href');
  navigateTo(path);  // Change the route without reloading the page
}

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', handleNavigation);
});

// Render the initial page based on the current URL
renderPage(window.location.pathname);
