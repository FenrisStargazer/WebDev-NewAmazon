var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'Test',
  password: 'BOzEri',
});

var conDb = mysql.createConnection({
    host: 'localhost',
    user: 'Test',
    password: 'BOzEri',
    database: 'nextamazon'
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS nextamazon", function (err, result) {
    if (err) throw err;
    console.log("nextamazon Database created");
  });

  var sql = "CREATE TABLE IF NOT EXISTS admin (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255))";
  conDb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("USERS Table created with: \n id INT AUATO_INC PRIMARY KEY, \n name VARCHAR, \n password VARCHAR");
  });

  var sql = "CREATE TABLE IF NOT EXISTS work (work_id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), work_content TEXT)";
  conDb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("WORK Table created with: \n work_id INT AUATO_INC PRIMARY KEY, \n title VARCHAR, \n work_content TEXT");
  });

  var sql = "INSERT INTO admin (name, password) VALUES ('TestAdmin','TestPassword')";
  conDb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("TestAdmin element added");
  });

});