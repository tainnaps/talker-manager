const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\w+@\w+\.com/;
  let message = '';

  if (!email || email === '') {
    message = 'O campo "email" é obrigatório';
    return res.status(400).json({ message });
  }

  if (!emailRegex.test(email)) {
    message = 'O "email" deve ter o formato "email@email.com"';
    return res.status(400).json({ message });
  }

  next();
};

module.exports = validateEmail;
