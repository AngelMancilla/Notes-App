const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
  res.send('Notes is not implemented');
});

router.get('/notes/new-note', (req, res) => {
  res.render('notes/new-note');
});

router.post('/notes/new-note', (req, res) => {
  const { title, description } = req.body;
  
  res.send('ok');
});

module.exports = router;
