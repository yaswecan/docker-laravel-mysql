export default function renderHome() {
  const html = `
    <h1>Welcome to the Home Page!</h1>
    <h2>Categories</h2>
    <div class="category-container" id="category-container">Loading categories...</div>
  `;

  setTimeout(() => {
    fetch('http://localhost:80/api/categories')
      .then(response => response.json())
      .then(data => {
        const categories = data.categories;
        const container = document.getElementById('category-container');

        if (!Array.isArray(categories)) {
          container.innerHTML = '<p class="error">Invalid data format</p>';
          return;
        }

        const cards = categories.map(category => `
          <div class="category-card">
           <img src="http://localhost/storage/assets/logo/logo-resto-app.jpeg" />
           <a h></a>
            <h3>${category.name}</h3>
          </div>
        `).join('');

        container.innerHTML = cards;
      })
      .catch(error => {
        document.getElementById('category-container').innerHTML = `
          <p class="error">Error: ${error.message}</p>
        `;
      });
  });

  return html;
}
