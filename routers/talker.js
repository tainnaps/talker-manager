const router = require('express').Router();
const fs = require('fs/promises');
const {
  readFile,
  validateName,
  validateAge,
  validateToken,
  validateTalk,
  validateTalkDate,
  validateTalkRate,
} = require('../middlewares/index');

router.get('/', readFile, (req, res) => {
  const { talkers } = req;

  if (talkers.length === 0) {
    return res.status(200).json([]);
  }

  res.status(200).json(talkers);
});

router.get('/:id', readFile, (req, res) => {
  const { id } = req.params;
  const { talkers } = req;
  const searchedTalker = talkers.find((talker) => talker.id === parseInt(id, 10));

  if (!searchedTalker) {
    const message = 'Pessoa palestrante não encontrada';
    return res.status(404).json({ message });
  }

  res.status(200).json(searchedTalker);
});

router.post(
  '/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkDate,
  validateTalkRate,
  readFile,
  async (req, res) => {
    const { talkers, body } = req;
    const lastTalkerId = talkers[talkers.length - 1].id;
    const newTalker = { id: lastTalkerId + 1, ...body };

    await fs.writeFile('./talker.json', JSON.stringify([...talkers, newTalker]));

    res.status(201).json(newTalker);
  },
);

router.put(
  '/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkDate,
  validateTalkRate,
  readFile,
  async (req, res) => {
    const { talkers, body } = req;
    const { id } = req.params;
    const index = talkers.findIndex((talker) => talker.id === parseInt(id, 10));
    talkers[index] = { ...talkers[index], ...body };

    await fs.writeFile('./talker.json', JSON.stringify([...talkers]));

    res.status(200).json(talkers[index]);
  },
);

module.exports = router;
