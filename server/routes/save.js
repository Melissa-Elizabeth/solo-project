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
      client.query('SELECT * FROM users WHERE email=$1',
        [req.decodedToken.email])
        .then(function (result) {
          pool.connect()
          .then(function (client) {
            if(result.rows.length > 0){
              client.query('UPDATE users SET shed = $1, drool = $2, bark = $3, apartment = $4, kids = $5, pet = $6, train= $7, energy = $8, size = $9 WHERE email = $10',
         [newSave.shed, newSave.drool, newSave.bark, newSave.apartment, newSave.kids, newSave.pet, newSave.train, newSave.energy, newSave.size, newUser.email]);

            } else {
              client.query('INSERT INTO users (email, name, shed, drool, bark, apartment, kids, pet, train, energy, size) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
                [newUser.email, newUser.name, newSave.shed, newSave.drool, newSave.bark, newSave.apartment, newSave.kids, newSave.pet, newSave.train, newSave.energy, newSave.size ])
                .then(function (result) {
                  client.release();
                  res.sendStatus(201);
                })
                .catch(function (err) {
                  console.log('error on INSERT', err);
                  res.sendStatus(500);
                });
            }
          });
        })
        .catch(function (err) {
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });
    });
});
module.exports = router;
