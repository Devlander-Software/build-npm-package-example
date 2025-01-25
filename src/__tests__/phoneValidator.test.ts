const isValidPhoneNumberFunc = require("../phoneValidator");

describe("isValidPhoneNumberFunc", () => {
  test("valid phone number with country code", () => {
    expect(isValidPhoneNumberFunc("+1234567890")).toBe(true);
  });

  test("valid phone number without country code", () => {
    expect(isValidPhoneNumberFunc("1234567890")).toBe(true);
  });

  test("invalid phone number with letters", () => {
    expect(isValidPhoneNumberFunc("12345abcde")).toBe(false);
  });

  test("invalid phone number with special characters", () => {
    expect(isValidPhoneNumberFunc("12345!@#$%")).toBe(false);
  });

  test("invalid phone number with spaces", () => {
    expect(isValidPhoneNumberFunc("123 456 7890")).toBe(false);
  });

  test("empty string", () => {
    expect(isValidPhoneNumberFunc("")).toBe(false);
  });

  test("phone number with more than 15 digits", () => {
    expect(isValidPhoneNumberFunc("1234567890123456")).toBe(false);
  });

  test("phone number with leading zero", () => {
    expect(isValidPhoneNumberFunc("0123456789")).toBe(false);
  });
});
