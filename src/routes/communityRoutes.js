import { Router } from 'express';
const communityRouter = Router();
import { getCommunitiesForUserControl, getPostsForCommunityControl } from '../controllers/communityController.js';

communityRouter.post('/getCommunitiesForUser', getCommunitiesForUserControl);
communityRouter.post('/getPostsForCommunity', getPostsForCommunityControl);

export default communityRouter;
