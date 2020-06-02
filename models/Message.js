const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    read: {
      type: Boolean,
      default: false,
    },
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
    subject: {
      type: String,
      unique: false,
    },
    nachricht: {
      type: String,
      unique: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', schema);
