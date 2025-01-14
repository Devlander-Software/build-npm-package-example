/**
 * Validates if the provided password meets common security criteria.
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password is strong, otherwise false.
 */
function isValidPassword(password: string) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }
  
  module.exports = isValidPassword;