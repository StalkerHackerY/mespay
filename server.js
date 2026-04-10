require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const mesomb = require('./config/mesomb');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// 📁 FRONTEND
app.use(express.static(path.join(__dirname, 'public')));

// 🌍 HOME
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🔒 MONTANT FIXE
const FIXED_AMOUNT = 10000;

// 💳 PAYMENT ROUTE
app.post('/pay', async (req, res) => {
  try {
    const { phone, service } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "phone requis"
      });
    }

    const response = await mesomb.makeCollect({
      payer: phone,
      amount: FIXED_AMOUNT,
      service: service || "MTN",
      currency: "XAF",
      country: "CM",
      nonce: Date.now().toString(),

      customer: { phone },
      location: { town: "Douala" }
    });

    return res.json({
      success: true,
      amount: FIXED_AMOUNT,
      data: response
    });

  } catch (e) {
    console.log("MESOMB ERROR:", e);

    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
});

// 🚀 PORT RAILWAY FIX
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server lancé sur port ${PORT}`);
});