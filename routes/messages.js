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
  const mailOptions = {
    from: process.env.EMAIL, // sender address
    to: req.body.email, // list of receivers
    subject: 'Vielen Dank für Ihre Nachricht!', // Subject line
    //TODO Email Templating for better looking mails
    html:
      '<div style="text-align:center;"><div>Hallo! Ihre Email ist angekommen - danke dafür! :)</div><div>Ich werde mich schnellstmöglich bei Ihnen melden.</div><div>Freundliche Grüße</div><div>Florian Müller</div></div>', // plain text body
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

  transporter.sendMail(mailOptions, function (err, info) {
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

module.exports = router;
