export default function renderMenuItem($routeParams) {
  const html = `
    <h1>Menu Item</h1>
    <div class="product-container" id="product-container">
      <p>Loading product...</p>
    </div>
  `;


  setTimeout(() => {
    const { itemId } = $routeParams;

    // Validation basique côté front
    if (!itemId || isNaN(itemId)) {
      document.getElementById('product-container').innerHTML = `
        <p class="error">Invalid or missing product ID.</p>
      `;
      return;
    }

    fetch(`http://localhost:80/api/products/${itemId}`)
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erreur inconnue');
        }
        return response.json();
      })
      .then(data => {
        const product = data.product;
        const container = document.getElementById('product-container');

        const card = `
          <div class="product-card">
            <img src="/assets/images/product/${product.image}" alt="${product.name}" class="product-image" />
            <div class="product-info">
              <h2 class="product-name">${product.name}</h2>
              <p class="product-description">${product.description}</p>
              <p class="product-price">$${parseFloat(product.price).toFixed(2)}</p>
              <button class="buy-button">Add to Cart</button>
            </div>
          </div>
        `;

        container.innerHTML = card;
      })
      .catch(error => {
        document.getElementById('product-container').innerHTML = `
          <p class="error">Erreur : ${error.message}</p>
        `;
      });
  });

  return html;
}
