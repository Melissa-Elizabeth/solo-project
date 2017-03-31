var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res){
  var userId = req.params.id;
  // This will be replaced with a SELECT statement to SQL
  console.log(req.query);
  pool.connect(function(errorConnectingToDatabase, client, done){
    if(errorConnectingToDatabase) {
      // There was an error connecting to the database
      console.log('Error connecting to database: ', errorConnectingToDatabase);
      res.sendStatus(500);
    } else {
      // We connected to the database!!!
      // Now, we're gonna' git stuff!!!!!
      client.query('SELECT shed, drool, bark FROM users WHERE id=$1;', [userId], function(errorMakingQuery, result){
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
