const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

//GET ALL
router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

//CREATE
router.post('/', async (req, res) => {
  const message = new Message({
    anrede: req.body.anrede,
    vorname: req.body.vorname,
    nachname: req.body.nachname,
    email: req.body.email,
    subject: req.body.subject,
    nachricht: req.body.nachricht,
  });
  await message.save();
  res.status(200).send(message);
});

module.exports = router;
