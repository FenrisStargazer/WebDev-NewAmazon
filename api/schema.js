var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'Test',
  password: 'K7H4qO',
});

var conDb = mysql.createConnection({
    host: 'localhost',
    user: 'Test',
    password: 'K7H4qO',
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

});