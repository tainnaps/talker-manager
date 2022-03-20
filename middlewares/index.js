const readFile = require('./readFile');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateToken = require('./validateToken');
const validateTalk = require('./validateTalk');

module.exports = {
  readFile,
  validateEmail,
  validatePassword,
  validateName,
  validateAge,
  validateToken,
  ...validateTalk,
};
