const express = require('express');
const Message = require('../models/Message');
const router = express.Router();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

//GET ALL
router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

//CREATE
router.post('/', async (req, res) => {
  const notificationOptions = {
    from: '"mueller-f" <' + process.env.EMAIL + '>',
    to: process.env.INBOX,
    subject: '[mueller-f.com]  -  Neue Nachricht!',
    html:
      '<div style="padding:5px;"><strong>Von:</strong> ' +
      req.body.vorname +
      ' ' +
      req.body.nachname +
      ' (' +
      req.body.email +
      ')</div>' +
      '<div style="padding:5px;"><strong>Betreff:</strong> ' +
      req.body.subject +
      ' </div>' +
      '<div style="padding:5px;"><strong>Nachricht:</strong> ' +
      req.body.nachricht +
      ' </div>',
  };

  const message = new Message({
    anrede: req.body.anrede,
    vorname: req.body.vorname,
    nachname: req.body.nachname,
    email: req.body.email,
    subject: req.body.subject,
    nachricht: req.body.nachricht,
  });

  await message.save();

  transporter.sendMail(notificationOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).send(message);
});

//UPDATE READ STATE
router.patch('/:id', async (req, res) => {
  console.log(' -- ' + req.params.id);
  try {
    const message = await Message.findOne({ _id: req.params.id });
    console.log(message);
    message.read = true;

    await message.save();
    res.status(200).send(message.read);
  } catch {
    res.status(404);
    res.send({ error: 'Nachricht existiert nicht!' });
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    await Message.deleteOne({ _id: req.params.id });
    res.status(204).send('deleted');
  } catch {
    res.status(404);
    res.send({ error: 'Nachricht existiert nicht!' });
  }
});

module.exports = router;
