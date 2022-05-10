//app.js
import * as express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Express.Application = express();


app.get('/', (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

