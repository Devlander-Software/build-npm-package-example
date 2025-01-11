/**
 * Aggregates all validators for easy imports.
 * @module Validators
 */

const isValidEmail = require('./emailValidator');
const isValidPhoneNumber = require('./phoneValidator');
const isValidURL = require('./urlValidator');
const isValidPassword = require('./passwordValidator');
module.exports = {
  isValidEmail,
  isValidPhoneNumber,
  isValidURL,
  isValidPassword,
}