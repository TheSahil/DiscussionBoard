import {createConnection,endConnection} from '../middleware/mySql.js';

let addUserService = async function(req) {
    const {email,LastName,FirstName,City,Country,Phone} = req.body;
    let con = await createConnection();
    let sql = 'INSERT INTO sys.Users (email,LastName,FirstName,City,Country,Phone) VALUES (\''+email+'\',\''+LastName+'\',\''+FirstName+'\',\''+City+'\',\''+Country+'\',\''+Phone+'\');';
    // console.log(sql);
    return new Promise((resolve, reject) => {
        try {
            con.query(sql, function (err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        } catch(err) {
            console.log(err);
        } finally {
            endConnection(con);
        }
    });
}

export {addUserService}