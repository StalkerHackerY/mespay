exports.isValidCMPhone = (phone) => {
  return /^6\d{8}$/.test(phone);
};