require('dotenv').config();
const { PaymentOperation } = require('@hachther/mesomb');

const mesomb = new PaymentOperation({
  applicationKey: process.env.MESOMB_APP_KEY,
  accessKey: process.env.MESOMB_ACCESS_KEY,
  secretKey: process.env.MESOMB_SECRET_KEY
});

module.exports = mesomb;