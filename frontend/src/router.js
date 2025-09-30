import {matchRoute} from './config/match-route.js';

// Fonction pour changer de route et mettre à jour le contenu affiché
export function navigateTo(path) {
  // Modifie l'URL sans recharger la page
  window.history.pushState({}, path, window.location.origin + path);
  renderPage(path); // Met à jour le contenu selon le chemin
}

export function renderPage(path) {
  const matched = matchRoute(path);

  if (matched) {
    const content = matched.render(matched.params || {});
    document.querySelector('#content').innerHTML = content;
    updateActiveLink(path);
  } else {
    document.querySelector('#content').innerHTML = '<h1>404 - Page non trouvée</h1>';
  }
}

// Fonction pour surligner le lien actif dans la barre de navigation
function updateActiveLink(path) {
  const links = document.querySelectorAll('nav a');
  
  // Supprime la classe 'active' de tous les liens
  links.forEach(link => {
    link.classList.remove('active');
  });

  // Ajoute la classe 'active' au lien correspondant au chemin actuel
  const activeLink = document.querySelector(`a[href="${path}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Événement déclenché lors de l'utilisation des boutons précédent/suivant du navigateur
window.addEventListener('popstate', () => {
  renderPage(window.location.pathname);
});
