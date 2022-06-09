"use strict";
global.name = 'name'
var __importDefault: any = (this && this.__importDefault) || function (mod: any) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importDefault(require("express"));
const dotenv = __importDefault(require("dotenv"));
dotenv.default.config();
const app = (express.default)();
const port = process.env.PORT;

app.get('/', (req: any, res: any) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question('Who are you?', () => {
        console.log(`Hey there ${name}!`);
        readline.close();
      });
});

module.exports = name;


module.exports = app;