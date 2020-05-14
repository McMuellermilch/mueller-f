const express = require('express');
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const router = express.Router();

/*
 * ROUTES FOR THE SKILLS ENDPOINT
 */

//GET ALL
router.get('/skills', async (req, res) => {
  const skills = await Skill.find();
  res.send(skills);
});

//GET INDIVIDUAL
router.get('/skills/:id', async (req, res) => {
  try {
    const skill = await Skill.findOne({ _id: req.params.id });
    res.send(skill);
  } catch {
    res.status(404);
    res.send({ error: 'Skill existiert nicht!' });
  }
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

//UPDATE
router.patch('/skills/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const skill = await Skill.findOne({ _id: req.params.id });
    if (req.body.name) {
      skill.name = req.body.name;
    }

    if (req.body.level) {
      skill.level = req.body.level;
    }

    await skill.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: 'Skill existiert nicht!' });
  }
});

//DELETE
router.delete('/skills/:id', async (req, res) => {
  try {
    await Skill.deleteOne({ _id: req.params.id });
    res.status(204).send('deleted');
  } catch {
    res.status(404);
    res.send({ error: 'Skill existiert nicht!' });
  }
});

/*
 * ROUTES FOR THE PROJECTS ENDPOINT
 */

//GET ALL
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

//GET INDIVIDUAL
router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    res.send(project);
  } catch {
    res.status(404);
    res.send({ error: 'Project existiert nicht!' });
  }
});

//CREATE
router.post('/projects', async (req, res) => {
  const project = new Project({
    name: req.body.name,
    languages: req.body.languages,
    description: req.body.description,
  });
  await project.save();
  res.send(project);
});

//UPDATE
router.patch('/projects/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const project = await Project.findOne({ _id: req.params.id });
    if (req.body.name) {
      project.name = req.body.name;
    }

    if (req.body.language) {
      project.language = req.body.language;
    }

    if (req.body.description) {
      project.description = req.body.description;
    }

    await project.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: 'Project existiert nicht!' });
  }
});

//DELETE
router.delete('/projects/:id', async (req, res) => {
  try {
    await Project.deleteOne({ _id: req.params.id });
    res.status(204).send('deleted');
  } catch {
    res.status(404);
    res.send({ error: 'Skill existiert nicht!' });
  }
});
module.exports = router;
