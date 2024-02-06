import { executeQuery } from '../middleware/mySql.js';
import Constants from '../constants.js';

export async function addUserService(req) {
    const { email, LastName, FirstName, City, Country, Phone } = req.body;
    return new Promise(async (resolve, reject) => {
        try {
            const results = await executeQuery(Constants.INSERT_USER_QUERY, [email, LastName, FirstName, City, Country, Phone]);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}