import { executeQuery } from '../middleware/mySql.js';
import Constants from '../constants.js';

export async function getCommunitiesForUserService(req) {
    const { email } = req.body;
    // console.log(email);
    return new Promise(async (resolve, reject) => {
        try {
            const results = await executeQuery(Constants.GET_COMMUNITY_FOR_USER_QUERY, [email]);
            // console.log(results);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}

export async function getPostsForCommunityService(req) {
    const { communityID } = req.body;
    console.log(communityID);
    // {Title, Body, CreatedBy, ParentCommunity, CreatedOn, PostID}
    return new Promise(async (resolve, reject) => {
        try {
            const results = await executeQuery(Constants.GET_POSTS_IN_COMMUNITY_QUERY, [communityID]);
            console.log(results);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}