var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res){
  var userId = 1;
  console.log(userID);
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      client.query('SELECT shed, drool, bark, apartment, kids, pet, train, energy, size FROM users WHERE id=$1;', [userId], function(errorMakingQuery, result){
        done();
        if(errorMakingQuery) {
          console.log('Error making the database query: ', errorMakingQuery);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
});

module.exports = router;
