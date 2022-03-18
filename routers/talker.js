const router = require('express').Router();
const { readFile } = require('../middlewares/index');

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

module.exports = router;
