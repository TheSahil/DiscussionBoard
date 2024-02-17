import { Router } from 'express';
const userRouter = Router();
import { addUserControl, checkIfUsernameExistsControl, GetUserProfileControl, UpdateUserProfileControl } from '../controllers/userController.js';

userRouter.post('/addUser', addUserControl);
userRouter.get('/checkIfUsernameExists/:username', checkIfUsernameExistsControl);
userRouter.get('/getUserProfile/:username', GetUserProfileControl);
userRouter.post('/updateUser', UpdateUserProfileControl);

export default userRouter;
