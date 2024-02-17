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
            const results = await executeQuery(Constants.GET_USER_QUERY, [userID]);
            if (results.length != 0) {
                resolve(Constants.USER_EXISTS);
            }
            resolve(Constants.USER_DOES_NOT_EXIST);
        } catch (error) {
            reject(error);
        }
    });
}

export async function GetUserProfileService(req) {
    const { params } = req;
    const userID = params.username;
    return new Promise(async (resolve, reject) => {
        try {
            const results = await executeQuery(Constants.GET_USER_QUERY, [userID]);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}

export async function UpdateUserProfileService(req) {
    const { email, LastName, FirstName, City, Country, Phone } = req.body;
    console.log(req.body);
    return new Promise(async (resolve, reject) => {
        try {
            const results = await executeQuery(Constants.UPDATE_USER_QUERY, [LastName, FirstName, City, Country, Phone, email]);
            resolve(results);
        } catch (error) {
            reject(error);
        }
    });
}