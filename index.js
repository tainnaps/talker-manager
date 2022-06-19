const express = require('express');
const bodyParser = require('body-parser');
const { talkerRouter, loginRouter } = require('./routers/index');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.use('/talker', talkerRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});
