/**
 * Validates if the provided string is a valid phone number.
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} True if the phone number is valid, otherwise false.
 */
function isValidPhoneNumber(phone) {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phone);
  }
  
  module.exports = isValidPhoneNumber;