require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const mesomb = require('./config/mesomb');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ SERVIR LE FRONTEND
app.use(express.static(path.join(__dirname, 'public')));

// ✅ ROUTE PRINCIPALE
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🔒 MONTANT FIXE GLOBAL
const FIXED_AMOUNT = 10000;

// ✅ API PAIEMENT
app.post('/pay', async (req, res) => {
  try {
    let { phone, service } = req.body; // ❌ amount supprimé

    // 🔒 validation
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "phone requis"
      });
    }

    // ⚠️ détection tentative fraude
    if (req.body.amount) {
      console.warn("⚠️ Tentative de modification du montant détectée !");
    }

    const response = await mesomb.makeCollect({
      payer: phone,
      amount: FIXED_AMOUNT, // ✅ montant verrouillé
      service: service || "MTN",
      currency: "XAF",
      country: "CM",
      nonce: Date.now().toString(),

      customer: {
        phone: phone
      },
      location: {
        town: "Douala"
      }
    });

    res.json({
      success: true,
      amount: FIXED_AMOUNT, // ✅ affiché côté client
      data: response
    });

  } catch (e) {
    console.log("MESOMB ERROR:", e);

    res.status(500).json({
      success: false,
      message: e.message
    });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server lancé sur http://localhost:3000");
});