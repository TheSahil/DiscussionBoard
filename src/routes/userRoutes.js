import { Router } from 'express';
const userRouter = Router();
import { addUserControl, checkIfUsernameExistsControl } from '../controllers/userController.js';

userRouter.post('/addUser', addUserControl);
userRouter.get('/checkIfUsernameExists/:username', checkIfUsernameExistsControl);

export default userRouter;
