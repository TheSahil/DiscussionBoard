import { Router } from 'express';
const communityRouter = Router();
import { getCommunitiesForUserControl } from '../controllers/communityController.js';

communityRouter.get('/getCommunitiesForUser/:user_id', getCommunitiesForUserControl);

export default communityRouter;
