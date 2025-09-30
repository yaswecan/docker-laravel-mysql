import renderHome from '../pages/home.js';
import renderAbout from '../pages/about.js';
import renderContact from '../pages/contact.js';
import renderMenu from '../pages/menu.js';
import renderMenuItem from '../pages/menu-item.js';
import renderSignIn from '../pages/signin';

// Définition des routes et des fonctions de rendu associées
const routes = [
  { path: '/', render: renderHome },
  { path: '/menu', render: renderMenu },
  { path: '/about', render: renderAbout },
  { path: '/contact', render: renderContact },
  { path: '/signin', render: renderSignIn },
  { path: '/menu/:itemId', render: renderMenuItem }, // <- dynamique
];

export const matchRoute = (path) => {
    for (const route of routes) {
      const routeParts = route.path.split('/');
      const pathParts = path.split('/');
  
      if (routeParts.length !== pathParts.length) continue;
  
      const params = {};
      let isMatch = true;
  
      for (let i = 0; i < routeParts.length; i++) {
        if (routeParts[i].startsWith(':')) {
          const paramName = routeParts[i].slice(1);
          params[paramName] = pathParts[i];
        } else if (routeParts[i] !== pathParts[i]) {
          isMatch = false;
          break;
        }
      }
  
      if (isMatch) return { render: route.render, params };
    }
  
    return null;
  }