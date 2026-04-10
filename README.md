# 💳 MesPay - MeSomb Payment Integration System

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🚀 Description

**MesPay** est une solution de paiement mobile intégrant l’API **MeSomb** pour permettre des transactions sécurisées via :

- 📲 MTN Mobile Money
- 🟠 Orange Money
- 💸 Paiements mobiles API-ready

Le projet est construit avec **Node.js + Express** et un frontend simple pour démonstration.

---

## ⚙️ Fonctionnalités

- 💰 Paiement mobile (collect)
- 🔐 Intégration sécurisée MeSomb API
- 📡 API REST simple `/pay`
- 📱 Interface frontend basique
- 📊 Gestion des statuts de transaction
- 🧾 Logs des erreurs serveur

---

## 🛠️ Technologies utilisées

- Node.js
- Express.js
- MeSomb SDK (@hachther/mesomb)
- CORS
- Body-parser
- dotenv

---

## 📁 Structure du projet


mespay/
│
├── config/
│ └── mesomb.js
│
├── controllers/
│ └── paymentController.js
│
├── public/
│ ├── index.html
│ └── script.js
│
├── server.js
├── package.json
├── .env
└── README.md


---

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone https://github.com/ton-user/mespay.git
cd mespay
2. Installer les dépendances
npm install
3. Configurer les variables d’environnement

Créer un fichier .env :

PORT=3000

MESOMB_APP_KEY=your_app_key
MESOMB_ACCESS_KEY=your_access_key
MESOMB_SECRET_KEY=your_secret_key
4. Lancer le serveur
node server.js
🌐 API Endpoint
🔥 Effectuer un paiement
POST /pay
📦 Body JSON
{
  "phone": "670000000",
  "amount": 10000,
  "service": "MTN"
}
📥 Réponse
{
  "success": true,
  "data": {
    "status": "SUCCESS",
    "transaction": {}
  }
}
📲 Frontend

Le frontend est accessible via :

http://localhost:3000
⚠️ Sécurité
❌ Ne jamais exposer les clés API côté frontend
🔐 Toujours utiliser .env
🔄 Valider les numéros de téléphone côté backend
🧠 Améliorations futures
🔔 Webhooks de confirmation
📊 Dashboard admin
💳 Support multi-gateways
📱 UI mobile avancée
🧾 Historique transactions
👨‍💻 Auteur

Développé par MesPay Dev Team

⭐ Support

Si ce projet t’aide, laisse une ⭐ sur le repo !

📜 License

MIT License - Free to use


---

# 🔥 SI TU VEUX UPGRADE PRO

Je peux te faire :

- README **style Stripe / PayPal niveau SaaS**
- landing page marketing TikTok
- dashboard admin complet
- système webhook MeSomb fiable

Dis juste 👍