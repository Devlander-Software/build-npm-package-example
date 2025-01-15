/**
 * Aggregates all validators for easy imports.
 * @module Validators
 */

const emailValidator = require('./emailValidator');
const isPhoneNumberValid = require('./phoneValidator');
const isValidURL = require('./urlValidator');
const passwordValidator = require('./passwordValidator');
module.exports = {
  emailValidator,
  isPhoneNumberValid,
  isValidURL,
  passwordValidator,
}