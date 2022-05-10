import express from "express";
const signin = express();

// app.get("/signin", () => {
//   res.status(200).send("Hello World!");
//   });

signin.get("/signin", (_req: any, res: { send: (arg0: number) => void; }) => {
  res.send(200);
});

module.exports = signin;