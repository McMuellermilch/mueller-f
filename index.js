require('dotenv').config();
const express = require('express');
const path = require('path');

const db = require('./src/models');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.post('/api/skill', (req, res) => {
  var list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', function (_, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

db.connectDb().then(async () => {
  const port = process.env.PORT || 5000;
  app.listen(port);

  console.log('Database connected');
  console.log('App is listening on port ' + port);
});
