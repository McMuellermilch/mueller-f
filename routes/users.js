const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');

//CREATE
router.post('/', async (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  await user.save();
  res.status(201).send(user);
});

//LOGIN ROUTE
router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (user == null) {
    res.status(400).send('Cannot find user');
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).send(user);
    } else {
      res.send('Not Allowed');
    }
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
