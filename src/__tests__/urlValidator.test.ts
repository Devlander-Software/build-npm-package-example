const validateURLFunc = require('../urlValidator');

describe('validateURLFunc', () => {
  test('returns true for a valid URL string', () => {
    expect(validateURLFunc('https://www.example.com')).toBe(true);
  });

  test('returns true for a valid URL object', () => {
    expect(validateURLFunc(new URL('https://www.example.com'))).toBe(true);
  });

  test('returns false for an invalid URL string', () => {
    expect(validateURLFunc('invalid-url')).toBe(false);
  });

  test('returns false for an empty string', () => {
    expect(validateURLFunc('')).toBe(false);
  });

  test('returns false for a string with spaces', () => {
    expect(validateURLFunc('https:// www.example.com')).toBe(false);
  });

  test('returns true for a URL with query parameters', () => {
    expect(validateURLFunc('https://www.example.com?param=value')).toBe(true);
  });

  test('returns true for a URL with a fragment', () => {
    expect(validateURLFunc('https://www.example.com#section')).toBe(true);
  });
});
