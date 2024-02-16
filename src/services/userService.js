import { executeQuery } from '../middleware/mySql.js';
import Constants from '../constants.js';

export async function addUserService(req) {
    const { email, LastName, FirstName, City, Country, Phone } = req.body;
    console.log(req.body);
    return new Promise(async (resolve, reject) => {
        try {
            const results = await executeQuery(Constants.INSERT_USER_QUERY, [email, LastName, FirstName, City, Country, Phone]);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}

export async function checkIfUsernameExistsService(req) {
    const { params } = req;
    const userID = params.username;
    return new Promise(async (resolve, reject) => {
        try {
            const results = await executeQuery(Constants.CHECK_USER, [userID]);
            if(results.length != 0){
                resolve(Constants.USER_EXISTS);
            }
            resolve(Constants.USER_DOES_NOT_EXIST);
        } catch (error) {
            reject(error);
        }
    });
}