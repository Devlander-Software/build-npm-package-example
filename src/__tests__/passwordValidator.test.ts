/**
 * Function to validate if a given password meets the required criteria.
 *
 * @function
 * @name isValidPasswordFunc
 * @param {string} password - The password string to be validated.
 * @returns {boolean} - Returns true if the password is valid, otherwise false.
 */
const isValidPasswordFunc = require("../passwordValidator");

describe("isValidPasswordFunc", () => {
  test("returns true for a valid password", () => {
    expect(isValidPasswordFunc("Password123")).toBe(true);
  });

  test("returns false for a password without numbers", () => {
    expect(isValidPasswordFunc("Password")).toBe(false);
  });

  test("returns false for a password without letters", () => {
    expect(isValidPasswordFunc("12345678")).toBe(false);
  });

  test("returns false for a password shorter than 8 characters", () => {
    expect(isValidPasswordFunc("Pass12")).toBe(false);
  });

  test("returns true for a valid password with special characters", () => {
    expect(isValidPasswordFunc("Passw0rd!")).toBe(true);
  });

  test("returns false for an empty password", () => {
    expect(isValidPasswordFunc("")).toBe(false);
  });
});
