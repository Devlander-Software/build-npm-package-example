/**
 * Validates if the provided string is a valid URL.
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if the URL is valid, otherwise false.
 */
function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
  
  module.exports = isValidURL;