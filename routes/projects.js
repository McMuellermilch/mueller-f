const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

//GET ALL
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

//GET INDIVIDUAL
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    res.send(project);
  } catch {
    res.status(404);
    res.send({ error: 'Project existiert nicht!' });
  }
});

//CREATE
router.post('/', async (req, res) => {
  console.log(req.body);
  const project = new Project({
    name: req.body.name,
    languages: req.body.languages,
    descriptionShort: req.body.descriptionShort,
    descriptionLong: req.body.descriptionLong,
    tags: req.body.tags,
    gitHubLink: req.body.gitHubLink,
  });
  await project.save();
  res.send(project);
});

//UPDATE
router.patch('/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });

    if (req.body.name) {
      project.name = req.body.name;
    }

    if (req.body.languages) {
      project.languages = req.body.languages;
    }

    if (req.body.descriptionShort) {
      project.descriptionShort = req.body.descriptionShort;
    }

    if (req.body.descriptionLong) {
      project.descriptionLong = req.body.descriptionLong;
    }

    if (req.body.tags) {
      project.tags = req.body.tags;
    }

    if (req.body.gitHubLink) {
      project.gitHubLink = req.body.gitHubLink;
    }

    await project.save();
    res.status(200).send('updated');
  } catch {
    res.status(404);
    res.send({ error: 'Project existiert nicht!' });
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Project.deleteOne({ _id: req.params.id });
    res.status(200).send('deleted');
  } catch {
    res.status(404);
    res.send({ error: 'Projekt existiert nicht!' });
  }
});

module.exports = router;
