import { Router } from 'express';
const userRouter = Router();
import { addUserControl } from '../controllers/userController.js';

userRouter.post('/addUser', addUserControl);

export default userRouter;
