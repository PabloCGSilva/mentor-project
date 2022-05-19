"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signin = (0, express_1.default)();
// app.get("/signin", () => {
//   res.status(200).send("Hello World!");
//   });
signin.get("/signin", (_req, res) => {
    res.send(200);
});
module.exports = signin;
