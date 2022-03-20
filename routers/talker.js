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
    const newTalkerId = talkers[talkers.length - 1].id + 1;
    const newTalker = { id: newTalkerId, ...body };

    await fs.writeFile('./talker.json', JSON.stringify([...talkers, newTalker]));

    res.status(201).json(newTalker);
  },
);

module.exports = router;
