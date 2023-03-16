var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
const dbConfig = require('../db.config.js');

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET users listing. */
router.get('/:username/:password', function(req, res, next) { 
  const { username, password } = req.params;

  console.log(req.baseUrl);
  // // console.log(username);
  // // res.status(200);
    connection.query(`SELECT password FROM admin WHERE (NAME = '${username}');`, function(err, rows) {
      var loggedIn = 0;

      rows.forEach(element => {
        if(element.password == password) {
          loggedIn = 1;
        }
      });

      if(loggedIn == 1) {
        res.status(201).send()
      } else {
        res.status(401).send()
      }
    });

});

module.exports = router;