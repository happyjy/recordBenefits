const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const routeUsers = require('./routes/users');
const routeThings = require('./routes/things');
// db connection
const { dbPool } = require('./dbConnection');

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.use('/api/users', routeUsers);
app.use('/api/things', routeThings);

app.get('/api/test', (req, res) => {
  // console.log({ req, res });
  console.log('/api/test');

  dbPool.getConnection(async (err, connection) => {
    if (err) {
      switch (err.code) {
        case 'PROTOCOL_CONNECTION_LOST':
          console.error('Database connection was closed.');
          break;
        case 'ER_CON_COUNT_ERROR':
          console.error('Database has too many connections.');
          break;
        case 'ECONNREFUSED':
          console.error('Database connection was refused.');
          break;
      }
      return;
    }
    // connection
    connection.query(`SELECT * FROM USERS_TEST;`, [], function (err, results) {
      if (err) throw err;
      console.log('### SELECT * FROM USERS_TEST');
      console.log({ results });
      res.send({ result: results });

      // res.send({
      //   result: [
      //     { index: 1, name: 'test1' },
      //     { index: 2, name: 'test2' },
      //   ],
      // });
    });
    connection.release();
  });
});
app.get('/user/:id', (req, res) => {
  res.send('user/id');
  // console.log({ reqParams: req.params });
});

app.get('/things/:id([0-9]{5})', function (req, res) {
  res.send('id: ' + req.params.id);
});

app.get('/things/:name/:id', function (req, res) {
  res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

//Other routes here
app.get('*', function (req, res) {
  res.send('Sorry, this is an invalid URL.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
