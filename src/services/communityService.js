import { executeQuery } from '../middleware/mySql.js';
import Constants from '../constants.js';

export async function getCommunitiesForUserService(req) {
    return new Promise(async (resolve, reject) => {
        try {
            const { params } = req;
            const userID = params.user_id;
            const results = await executeQuery(Constants.GET_COMMUNITY_FOR_USER, [userID]);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}