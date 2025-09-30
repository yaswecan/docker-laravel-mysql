# 📦 Mon Application Fullstack

Ce projet est une application **fullstack** composée de deux parties principales :

- 🔙 Un **backend en PHP (Laravel)**
- 🔜 Un **frontend en JavaScript** (React, Vue ou autre framework moderne)

---

## 🚀 Lancement de l'application

### ✅ Prérequis

Assure-toi d’avoir installé :

- PHP ≥ 8.1 et [Composer](https://getcomposer.org/)
- Node.js ≥ 16 et [npm](https://www.npmjs.com/)
- Une base de données fonctionnelle (ex : MySQL)
- Les fichiers `.env` configurés dans `/api` et `/frontend` si nécessaire

---

## 🔧 Installation et démarrage

### 1. Backend (Laravel)

```bash
cd api

# Installer les dépendances PHP
composer install

# Copier et configurer le fichier d'environnement
cp .env.example .env

# Générer la clé d'application
php artisan key:generate

# Configurer la base de données dans le .env, puis exécuter les migrations
php artisan migrate

# Lancer le serveur de développement Laravel
php artisan serve


### 1. Front end 
```bash
cd frontend

# Installer les dépendances npm
npm install

# Lancer le serveur de développement
npm run dev

## Vérification
🔗 Backend : Visite http://127.0.0.1:8000 pour vérifier que l'API est en ligne

🔗 Frontend : Visite http://localhost:3000 pour tester l’interface utilisateur