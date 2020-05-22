require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const skillsRoute = require('./routes/skills');
const projectsRoute = require('./routes/projects');
const usersRoute = require('./routes/users');
const messagesRoute = require('./routes/messages');
const bodyParser = require('body-parser');
const cors = require('cors');
var session = require('express-session');

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
    app.use('/api/skills', skillsRoute);
    app.use('/api/projects', projectsRoute);
    app.use('/api/users', usersRoute);
    app.use('/api/messages', messagesRoute);

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
