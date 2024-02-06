import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

let createConnection = async function() {
    var con = mysql.createConnection({
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PW
    });
    return con;
}

let endConnection = async function(con) {
    console.log("closing connection!");
    return con.end();
}

export {createConnection, endConnection}