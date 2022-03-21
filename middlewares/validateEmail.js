const validateEmail = (req, res, next) => {
  const { email } = req.body;
  /* Utilizei o link abaixo como referência para construir minha regex.
    link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions */
  const emailRegex = /\w+@\w+\.com/;
  let message = '';

  if (!email || email === '') {
    message = 'O campo "email" é obrigatório';
    return res.status(400).json({ message });
  }
  /* Utilizei o link abaixo como referência para testar minha regex.
    link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test */
  if (!emailRegex.test(email)) {
    message = 'O "email" deve ter o formato "email@email.com"';
    return res.status(400).json({ message });
  }

  next();
};

module.exports = validateEmail;
