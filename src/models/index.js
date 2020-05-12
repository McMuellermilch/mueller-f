const mongoose = require('mongoose');

const Skill = require('./skill');

const connectDb = () => {
  return mongoose.connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
  });
};

const models = { Skill };

exports.connectDb = connectDb;
exports.models = models;
