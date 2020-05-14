const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    unique: false,
  },
  languages: {
    type: Array,
    unique: false,
  },
  description: {
    type: String,
    unique: false,
  },
});

module.exports = mongoose.model('Project', schema);
