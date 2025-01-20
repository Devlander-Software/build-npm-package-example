/**
 * Validates an email address.
 *
 * @param email - The email address to validate.
 * @returns A boolean indicating whether the email address is valid.
 */
const validEmailFunc = require('../emailValidator');


describe('isValidEmail', () => {
    test('valid email addresses', () => {
        expect(validEmailFunc('test@example.com')).toBe(true);
        expect(validEmailFunc('user.name+tag+sorting@example.com')).toBe(true);
        expect(validEmailFunc('user.name@example.co.uk')).toBe(true);
    });

    test('invalid email addresses', () => {
        expect(validEmailFunc('plainaddress')).toBe(false);
        expect(validEmailFunc('@missingusername.com')).toBe(false);
        expect(validEmailFunc('username@.com')).toBe(false);
        expect(validEmailFunc('username@com')).toBe(false);
        expect(validEmailFunc('username@com.')).toBe(false);
        expect(validEmailFunc('username@-example.com')).toBe(false);
        expect(validEmailFunc('username@example..com')).toBe(false);
    });
});