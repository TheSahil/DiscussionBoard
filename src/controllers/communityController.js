import { getCommunitiesForUserService } from '../services/communityService.js';

export async function getCommunitiesForUserControl(req, res, next) {
  try {
    const result = await getCommunitiesForUserService(req);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
}
