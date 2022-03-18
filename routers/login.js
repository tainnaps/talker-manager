const router = require('express').Router();
const { validateEmail, validatePassword } = require('../middlewares');

router.post(
  '/',
  validateEmail,
  validatePassword,
  (_req, res) => {
    const token = '7mqaVRXJSp886CGr';
    res.status(200).json({ token });
  },
);

module.exports = router;
