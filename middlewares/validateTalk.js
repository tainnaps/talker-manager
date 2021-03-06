const validateTalkDate = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  /* Utilizei o link abaixo como referência para construir minha regex.
    link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions */
  const dateRegex = /\d{2}\/\d{2}\/\d{4}/;

  /* Utilizei o link abaixo como referência para testar minha regex.
    link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test */
  if (!dateRegex.test(watchedAt)) {
    const message = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
    return res.status(400).json({ message });
  }

  next();
};

const validateTalkRate = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (rate < 1 || rate > 5) {
    const message = 'O campo "rate" deve ser um inteiro de 1 à 5';
    return res.status(400).json({ message });
  }

  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk || !talk.watchedAt || (!talk.rate && talk.rate !== 0)) {
    const message = 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
    return res.status(400).json({ message });
  }

  next();
};

module.exports = {
  validateTalkDate,
  validateTalkRate,
  validateTalk,
};
