const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: '',
    password: '',
    database: ''
});


connection.connect((err) => {
    if (err) {
        console.log('Check SQL connection:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = connection;