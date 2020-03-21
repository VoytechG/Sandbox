const express = require("express");
const router = express.Router();

router.post("/", [check()], (req, res) => res.send("User route"));

module.exports = router;
