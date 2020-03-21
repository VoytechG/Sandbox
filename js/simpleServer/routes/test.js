const express = require("express");

const router = express.Router();

// router.use(express.static("public"));

// router.use((req, res, next) => {
//   console.log("request recieved");
//   next();
// });

// router.get("/:path/:path2", (req, res, next) => {
//   console.log(`get request received for get at "/"`);
//   next();
// });

router.get("/", (req, res) => {
  res.send("<h1>Hello worldd!</h1>");
});

router.get("/hello", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

router.get("/hello/hello", (req, res) => {
  res.send("GET hello hello!");
});

router.post("/hello", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);
  const { name } = req.query;
  res.send(`POST hello!, ${name}`);
});

module.exports = router;
