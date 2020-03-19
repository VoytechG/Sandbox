const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/auth"));
app.use("/api/test", require("./routes/test"));

const serverPort = 5001;
app.listen(serverPort, () => {
  console.log(`Listening on port ${serverPort}!`);
});
