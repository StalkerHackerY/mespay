const mesomb = require('../config/mesomb');

exports.pay = async (req, res) => {
  try {
    let { phone, amount, service } = req.body;

    if (!phone || !amount) {
      return res.status(400).json({
        success: false,
        message: "Champs manquants"
      });
    }

    // format téléphone propre
    if (!phone.startsWith("237")) {
      phone = "237" + phone;
    }

    const response = await mesomb.makeCollect({
      payer: phone,
      amount: Number(amount),
      service: service || "MTN",
      currency: "XAF",
      country: "CM",
      nonce: Date.now().toString(),

      // 🔥 AJOUT IMPORTANT (corrige ton 500)
      customer: {
        phone: phone
      },

      location: {
        town: "Douala"
      }
    });

    return res.json({
      success: true,
      data: response
    });

  } catch (error) {
    console.log("MESOMB ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      details: error.response?.data || null
    });
  }
};