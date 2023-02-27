var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Test',
  password: 'K7H4qO',
  database: 'nextamazon',
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET users listing. */
router.get('/:username/:password', function(req, res, next) { 
  const { username, password } = req.params;

  console.log(req.baseUrl);

    connection.query(`SELECT * FROM admin;`, function(err, rows) {
      if(err) {
        console.log(err);
        res.status(401).send( {msg: 'unable to login'} )
      }
      rows.forEach(element => {

        if(element.name == username && element.password == password) {
          res.status(201).send( {msg: 'login success'} );
        } 

      });

      if(username != rows[0].name && password != rows[0].password) {
        console.log(err);
        res.status(401).send( {msg: 'unable to login'} )
      }
    });


});

module.exports = router;