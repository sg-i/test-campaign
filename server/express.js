const express = require('express');
const cors = require('cors');
const app = express();
const { Сampaign } = require('./db');

const port = 3001;
app.use(cors());
app.use(express.json());
app.get('/api', (req, res) => {
  res.send({ message: 'Hello World' });
});

app.post('/addCampaign', function (req, res) {
  const obj = req.body;
  Сampaign
    .create(obj)
    .then((doc) => {
      res.status(200).send({
        message: 'Успех',
        doc,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: 'Неудача',
        error,
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
