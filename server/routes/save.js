var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
var pool = new pg.Pool(config);

router.post('/', function (req, res) {
  var newSave = req.body;
var newUser = req.decodedToken;
  console.log('New Hero: ', newSave);
  pool.connect()
    .then(function (client) {
      client.query('INSERT INTO users (email, name, dog_id, dog_name, dog_pic) VALUES ($1, $2, $3, $4, $5)',
        [newUser.email, newUser.name, newSave.id, newSave.name, newSave.pics])
        .then(function (result) {
          client.release();
          res.sendStatus(201);
        })
        .catch(function (err) {
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });
    });
});
module.exports = router;
