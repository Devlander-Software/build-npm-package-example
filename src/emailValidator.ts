/**
 * Validates if the provided email is in a correct format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, otherwise false.
 */
function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Ensure:
  // 1. Domain doesn't start or end with a hyphen.
  // 2. No consecutive dots in the domain.
  if (!regex.test(email)) {
    return false;
  }

  const domain = email.split('@')[1];
  if (!domain || domain.startsWith('-') || domain.endsWith('-') || domain.includes('..')) {
    return false;
  }

  return true;
}

module.exports = isValidEmail;