const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// route paiement
router.post('/pay', paymentController.pay);

module.exports = router;