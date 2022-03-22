const validateToken = (req, res, next) => {
  /* Utilizei o link abaixo como referência para construir minha regex.
    link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions */
  const validTokenRegex = /\w{16}/;
  const { authorization } = req.headers;
  let message = '';

  if (!authorization) {
    message = 'Token não encontrado';
    return res.status(401).json({ message });
  }
  /* Utilizei o link abaixo como referência para testar minha regex.
    link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test */
  if (!validTokenRegex.test(authorization)) {
    message = 'Token inválido';
    return res.status(401).json({ message });
  }

  next();
};

module.exports = validateToken;
