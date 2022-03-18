const fs = require('fs/promises');

const readFile = async (req, _res, next) => {
  const fileContent = await fs.readFile('./talker.json', 'utf-8');
  const talkers = JSON.parse(fileContent);

  req.talkers = talkers;

  next();
};

module.exports = readFile;
