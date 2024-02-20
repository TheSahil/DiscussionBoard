import { Router } from 'express';
const communityRouter = Router();
import { getCommunitiesForUserControl } from '../controllers/communityController.js';

communityRouter.post('/getCommunitiesForUser', getCommunitiesForUserControl);

export default communityRouter;
