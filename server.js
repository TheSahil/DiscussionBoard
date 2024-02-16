import { Router } from 'express';
import express from 'express';
import userRouter from './src/routes/userRoutes.js';
import communityRouter from './src/routes/communityRoutes.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(userRouter);
app.use(communityRouter);
app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(5000, () => console.log('App is listening on port 5000.'));