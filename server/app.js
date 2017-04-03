var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var decoder = require('./modules/decoder');
var auth = require('./routes/auth');
var save = require('./routes/save');
var results = require('./routes/results');

app.listen(3003, function() {
  console.log('listening on 3003');
});

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);



app.use(bodyParser.json());

app.use(express.static(path.resolve('./server/public')));

// serve index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.get('/breed', function (req, res) {
  console.log('hit');
  pool.connect()
    .then(function (client) {
      client.query('SELECT id, name, pics FROM dogs')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
});

app.get('/result', function(req, res) {
  console.log('hit my route', req.query);
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      var query = "SELECT id, name, pics FROM dogs WHERE id > 0";

      if (req.query.shed == 'low'){
        query += " AND shed = 'low'";
      }

      if (req.query.drool == 'low'){
        query += " AND drool = 'low'";
      }

      if (req.query.bark == 'low'){
        query += " AND bark = 'low'";
      }

      if (req.query.apartment == 'yes'){
        query += " AND apartment = 'yes'";
      }

      if (req.query.kids == 'yes'){
        query += " AND kids = 'yes'";
      }

      if (req.query.train == 'easy'){
        query += " AND train = 'easy'";
      }

      if (req.query.energy == 'high'){
        query += " AND train = 'high'";
      }

      if (req.query.size == 'large'){
        query += " AND size = 'large'";
      } else if
        (req.query.size == 'medium'){
          query += " AND size = 'medium'";
        } else if
          (req.query.size == 'small'){
          query += " AND size = 'small'";
        }

      client.query(query, function(err, result) {
        done();

        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log(result);
          res.status(200).send(result.rows);
        }
      });

    }
  });
});

app.get('/dog/:id', function(req, res){
  var dogId = req.params.id;
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
      client.query('SELECT * FROM dogs WHERE id=$1;', [dogId], function(errorMakingQuery, result){
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

app.get('/user/:id', function(req, res){
  var userId = 1;
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
      client.query('SELECT * FROM users WHERE id=$1;', [userId], function(errorMakingQuery, result){
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


// Decodes the token in the request header and attaches the decoded token to the request.
app.use(decoder.token);

app.use('/auth', auth);
app.use('/save', save);
app.use('/results', results);


/* Whatever you do below this is protected by your authentication.
WARNING: So far you are returning secret data to ANYONE who is logged in.
There is still more work to be done if you want to implement roles.
No authorization has been completed yet in this branch.
You can use req.decodedToken and some logic to do that.
Other branches in the nodeFire repository show how to do that. */

// This is the route for your secretData. The request gets here after it has been authenticated.
// app.use("/privateData", privateData);





//
// app.get('/shedHigh', function(req, res) {
//   console.log('hit my route');
//   pool.connect(function(err, client, done) {
//     if(err){
//       console.log(err);
//       res.sendStatus(500);
//     }else{
//
//       client.query("SELECT name FROM dogs WHERE shed ='';", function(err, result) {
//         done();
//
//         if(err){
//           console.log(err);
//           res.sendStatus(500);
//         }else{
//           console.log(result);
//           res.status(200).send(result.rows);
//         }
//       });
//     }
//   });
// });
