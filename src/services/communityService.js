import { executeQuery } from '../middleware/mySql.js';
import Constants from '../constants.js';

export async function getCommunitiesForUserService(req) {
    const { email } = req.body;
    console.log(email);
    return new Promise(async (resolve, reject) => {
        try {
            const results = await executeQuery(Constants.GET_COMMUNITY_FOR_USER, [email]);
            console.log(results);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}
