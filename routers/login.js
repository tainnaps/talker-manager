const router = require('express').Router();
const crypto = require('crypto');

const { validateEmail, validatePassword } = require('../middlewares');

router.post(
  '/',
  validateEmail,
  validatePassword,
  (_req, res) => {
    /* Usei o link abaixo como referência para gerar um token aleatório.
      link: https://www.geeksforgeeks.org/node-js-crypto-randombytes-method/ */
    const token = crypto.randomBytes(8).toString('hex'); 
    res.status(200).json({ token });
  },
);

module.exports = router;
