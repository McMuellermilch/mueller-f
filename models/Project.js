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
  descriptionShort: {
    type: String,
    unique: false,
  },
  descriptionLong: {
    type: String,
    unique: false,
  },
  tags: {
    type: Array,
    unique: false,
  },
  gitHubLink: {
    type: String,
    unique: false,
  },
});

module.exports = mongoose.model('Project', schema);
