var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Test',
  password: 'CA7OWu',
  database: 'nextamazon',
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* GET users listing. */
router.get('/', function(req, res, next) { 

  connection.query(`SELECT * FROM USERS;`, function(err, rows) {
  });

  res.status(201).send({msg: "Success"});

});

router.post('/', urlencodedParser, (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  console.log(username);
  console.log(password);

  if(username && password) {
    try {
      console.log(username);
      console.log(password);
      connection.query(`INSERT INTO USERS VALUE('${username}', '${password}');`);
      res.status(201).send({ msg: 'Created User' });
    } catch (err) {
      console.log(err);
    }
  }
  
});



module.exports = router;
