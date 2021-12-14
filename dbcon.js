// create connection
const mysql = require("mysql");
const con = new mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expresstest',
});

con.connect((err) => {
    if(!err) {
        console.log("Connection successfull");
    } else {
        console.log("Not connected error occured");
    }
})

module.exports = con;