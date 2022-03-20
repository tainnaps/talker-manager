const validateAge = (req, res, next) => {
  const { age } = req.body;
  let message = '';

  if (!age) {
    message = 'O campo "age" é obrigatório';
    return res.status(400).json({ message });
  }

  if (age < 18) {
    message = 'A pessoa palestrante deve ser maior de idade';
    return res.status(400).json({ message });
  }

  next();
};

module.exports = validateAge;
