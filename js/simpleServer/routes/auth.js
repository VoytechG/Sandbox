const express = require("express");
const router = express.Router();

router.post("/", (req, res) => res.send("User route"));

module.exports = router;
