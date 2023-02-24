const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'Test',
    password: '',
    database: 'SampleApp',
    port: '3306'
});