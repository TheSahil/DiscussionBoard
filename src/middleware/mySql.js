import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

export async function createConnection() {
    return new Promise((resolve, reject) => {
        var pool = mysql.createConnection({
            host: process.env.SQL_HOST,
            user: process.env.SQL_USER,
            password: process.env.SQL_PW
        });

        pool.connect((err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                reject(err);
            } else {
                resolve(pool);
            }
        });
    });
}

export async function executeQuery(sqlQuery, values) {
    try {
        // Get a connection from the pool
        var connection = await createConnection();
        // Perform the query
        const results = await new Promise((resolve, reject) => {
            connection.query(sqlQuery, values, (error, results, fields) => {
                if (error) {
                    console.error('Error executing query:', error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
        // Release the connection
        connection.end();
        return results;
    } catch (error) {
        throw error;
    }
}
