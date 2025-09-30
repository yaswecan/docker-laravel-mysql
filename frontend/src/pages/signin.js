export default function renderSignIn() {
  const html = `
    <form id="login-form">
      <input type="email" id="email" placeholder="Email" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Se connecter</button>
    </form>
    <div id="user-info"></div>
  `;

  const API_URL = 'http://localhost/api';

  setTimeout(()=> {
    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const submitButton = document.querySelector('button[type="submit"]');
      submitButton.disabled = true;
  
      const res = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      submitButton.disabled = false;
  
      const data = await res.json();
  
      if (res.ok) {
        localStorage.setItem('token', data.token);
        document.getElementById('login-form').reset();
        alert('Connexion réussie');
        getUser();
      } else {
        const errorMessage = data.error || 'Erreur';
        document.getElementById('user-info').innerText = `Erreur: ${errorMessage}`;
      }
    });
  
    async function getUser() {
      const token = localStorage.getItem('token');
      if (!token) {
        document.getElementById('user-info').innerText = 'Non connecté';
        return;
      }
  
      const res = await fetch(`${API_URL}/user`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
  
      if (res.ok) {
        const user = await res.json();
        document.getElementById('user-info').innerText = `Connecté en tant que ${user.name}`;
      } else {
        localStorage.removeItem('token');
        document.getElementById('user-info').innerText = 'Non connecté';
      }
    }
  })

  return html;
}
