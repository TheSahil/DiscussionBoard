import { Router } from 'express';
const communityRouter = Router();
import { getCommunitiesForUserControl } from '../controllers/communityController.js';

communityRouter.post('/getCommunitiesForUser/:user_id', getCommunitiesForUserControl);

export default communityRouter;
