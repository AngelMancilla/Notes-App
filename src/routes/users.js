const express = require("express");
const router = express.Router();

router.get("/users/signin", (req, res) => {
  res.send("Signin is not implemented");
});

router.get("/users/signup", (req, res) => {
  res.send("Signup is not implemented");
});

module.exports = router;
