const mongoose = require('mongoose');

const schema = mongoose.Schema({
  anrede: {
    type: String,
    unique: false,
  },
  vorname: {
    type: String,
    unique: false,
  },
  nachname: {
    type: String,
    unique: false,
  },
  email: {
    type: String,
    unique: false,
  },
  nachricht: {
    type: String,
    unique: false,
  },
});

module.exports = mongoose.model('Message', schema);
