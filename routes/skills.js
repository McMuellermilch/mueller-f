const express = require('express');
const Skill = require('../models/Skill');
const router = express.Router();

//GET ALL
router.get('/', async (req, res) => {
  const skills = await Skill.find();
  res.send(skills);
});

//GET INDIVIDUAL
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findOne({ _id: req.params.id });
    res.send(skill);
  } catch {
    res.status(404);
    res.send({ error: 'Skill existiert nicht!' });
  }
});

//CREATE
router.post('/', async (req, res) => {
  const skill = new Skill({
    name: req.body.name,
    level: req.body.level,
    color: req.body.color,
  });
  await skill.save();
  res.send(skill);
});

//UPDATE
router.patch('/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const skill = await Skill.findOne({ _id: req.params.id });
    if (req.body.name) {
      skill.name = req.body.name;
    }

    if (req.body.level) {
      skill.level = req.body.level;
    }

    if (req.body.color) {
      skill.color = req.body.color;
    }

    await skill.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: 'Skill existiert nicht!' });
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Skill.deleteOne({ _id: req.params.id });
    res.status(204).send('deleted');
  } catch {
    res.status(404);
    res.send({ error: 'Skill existiert nicht!' });
  }
});

module.exports = router;
