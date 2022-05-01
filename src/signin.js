const express = require("express");
const signin = express();

// app.get("/signin", () => {
//   res.status(200).send("Hello World!");
//   });

signin.get("/signin", (req, res) => {
  res.send(200);
});

module.exports = signin;