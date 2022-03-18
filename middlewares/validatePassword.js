const validatePassword = (req, res, next) => {
  const { password } = req.body;
  let message = '';

  if (!password) {
    message = 'O campo "password" é obrigatório';
    return res.status(400).json({ message });
  }

  if (password.length < 6) {
    message = 'O "password" deve ter pelo menos 6 caracteres';
    return res.status(400).json({ message });
  }

  next();
};

module.exports = validatePassword;
