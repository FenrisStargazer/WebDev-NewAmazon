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
router.get('/', function(req, res, next) { 

    connection.query(`SELECT * FROM work;`, function(err, rows) {
        res.json({message: rows});
        res.status(200);
    });


});

router.post('/:title/:content', function(req, res, next) {
    const { title, content } = req.params;

    connection.query(`INSERT INTO work (title, work_content)
                    VALUES ("${title}", "${content}");`, function(err, rows) {
                        if(err == null) {
                            res.status(200).send( {msg: 'Work Posted!'} );
                        } else {
                            res.status(400).send( {msg: err } );
                        }
                    });

    console.log(content);
});

module.exports = router;