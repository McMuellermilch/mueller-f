const express = require('express');
const Skill = require('./models/Skill');
const router = express.Router();

//GET ALL
router.get('/skills', async (req, res) => {
  const skills = await Skill.find();
  res.send(skills);
});

//CREATE
router.post('/skills', async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    level: req.body.level,
  });
  await skill.save();
  res.send(skill);
});

module.exports = router;
