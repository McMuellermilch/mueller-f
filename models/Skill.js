const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    unique: false,
  },
  level: {
    type: String,
    unique: false,
  },
});

module.exports = mongoose.model('Skill', schema);
