var mysql = require('mysql');
var dotenv = require('dotenv');
dotenv.config();

var con = mysql.createConnection({
	host: process.env.SQL_HOST,
	user: process.env.SQL_USER,
	password: process.env.SQL_PW
});

// console.log(process.env.SQL_HOST);
// console.log(process.env.SQL_USER);
// console.log(process.env.SQL_PW);

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	sql = 'select * from sys.Users;';
	con.query(sql, function (err, result) {
	  if (err) throw err;
	  console.log(result);
	});
});