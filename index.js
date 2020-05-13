require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    const app = express();

    app.use(cors());
    app.use(express.static(path.join(__dirname, 'client/build'))); // Serve the static files from the React app
    app.use(bodyParser.json());
    app.use('/api', routes);

    app.get('*', function (_, res) {
      res.sendFile(path.join(__dirname, './client/build/index.html'), function (
        err
      ) {
        if (err) {
          res.status(500).send(err);
        }
      });
    });

    const port = process.env.PORT || 5000;
    app.listen(port);
    console.log('App is listening on port ' + port);
  });
