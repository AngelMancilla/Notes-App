const express = require("express");
const router = express.Router();

router.get("/notes", (req, res) => {
  res.send("Notes is not implemented");
});

module.exports = router;
