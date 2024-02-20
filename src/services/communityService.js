import { executeQuery } from '../middleware/mySql.js';
import Constants from '../constants.js';

export async function getCommunitiesForUserService(req) {
    const { email } = req.body;
    console.log(req.body);
    return new Promise(async (resolve, reject) => {
        try {
            const { params } = req;
            const email = params.email;
            const results = await executeQuery(Constants.GET_COMMUNITY_FOR_USER, [email]);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}
