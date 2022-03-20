const validateToken = (req, res, next) => {
  const VALID_TOKEN = '7mqaVRXJSp886CGr';
  const { authorization } = req.headers;
  let message = '';

  if (!authorization) {
    message = 'Token não encontrado';
    return res.status(401).json({ message });
  }

  if (authorization !== VALID_TOKEN) {
    message = 'Token inválido';
    return res.status(401).json({ message });
  }

  next();
};

module.exports = validateToken;
