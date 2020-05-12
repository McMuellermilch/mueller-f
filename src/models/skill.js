const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model('Skill', skillSchema);

exports.skill = Skill;
