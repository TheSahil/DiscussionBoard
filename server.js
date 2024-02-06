import { Router } from 'express';
import express from 'express';
import userRouter from './src/routes/userRoutes.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(userRouter);
app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(5000, () => console.log('App is listening on port 5000.'));