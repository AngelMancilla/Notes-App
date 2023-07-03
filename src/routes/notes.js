const express = require('express');
const router = express.Router();
const Note = require('../models/Notes');

router.get('/notes', async (req, res) => {
  const notes = await Note.find().lean().sort({date: 'desc'});
  res.render('notes/all-notes', { notes });
});

router.get('/notes/new-note', (req, res) => {
  res.render('notes/new-note');
});

router.post('/notes/new-note', async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: 'Please write a Title' });
  }
  if (!description) {
    errors.push({ text: 'Please write a Description' });
  }
  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      title,
      description,
    });
  } else {
    const newNote = new Note({ title, description });
    await newNote.save();
    res.redirect('/notes');
  }
});

module.exports = router;
