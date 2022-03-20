const validateName = (req, res, next) => {
  const { name } = req.body;
  let message = '';

  if (!name) {
    message = 'O campo "name" é obrigatório';
    return res.status(400).json({ message });
  }

  if (name.length < 3) {
    message = 'O "name" deve ter pelo menos 3 caracteres';
    return res.status(400).json({ message });
  }

  next();
};

module.exports = validateName;
