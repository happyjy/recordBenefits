require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const routeUsers = require('./routes/users');
const routeThings = require('./routes/things');
// db connection
const { dbPool } = require('./dbConnection');

// app.get('/', (req, res) => {
//   res.send('Hello World!!!');
// });

app.use('/api/users', routeUsers);
app.use('/api/things', routeThings);

// db connection
// select
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
    let responseResult = [];

    // # async, await, promise를 사용한 방법
    //  * result1: resolve값을 반환(await를 new Promise와 함께 사용하면)
    const result1 = await new Promise((resolve, reject) => {
      connection.query(`select * from users_test;`, [], function (err, results) {
        if (err) throw err;
        console.log('### select * from users_test - 1');
        console.log({ results });
        resolve(results);
      });
    });

    connection.query(`select * from users_test;`, [], function (err, results) {
      if (err) throw err;
      console.log('### select * from users_test - 2');
      console.log({ results });
      res.send({ result: [...result1, ...results] });
    });

    // # promise, then을 사용한 방법
    //  * result1: promise 객체 반환
    // const result1 = new Promise((resolve, reject) => {
    //   connection.query(`SELECT * FROM USERS_TEST;`, [], function (err, results) {
    //     if (err) throw err;
    //     console.log('### SELECT * FROM USERS_TEST - 1');
    //     console.log({ results });
    //     resolve(results);
    //   });
    // });

    // result1.then(
    //   (result) => {
    //     connection.query(`SELECT * FROM USERS_TEST;`, [], function (err, results) {
    //       if (err) throw err;
    //       console.log('### SELECT * FROM USERS_TEST - 2');
    //       console.log({ results });
    //       res.send({ result: [...result, ...results] });
    //     });
    //   },
    //   (error) => {
    //     console.error;
    //   },
    // );

    connection.release();
  });
});
// insert
app.get('/api/test/add', (req, res) => {
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
    connection.query(
      `INSERT INTO users_test (token, email, nickname) VALUES (?,?,?));`,
      ['토큰', '이메일', '닉네임'],
      function (err, results) {
        if (err) throw err;
        console.log('### insert * FROM USERS_TEST');
        console.log({ results });
        res.send({ result: results });
      },
    );
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
// app.get('*', function (req, res) {
//   res.send('Sorry, this is an invalid URL.');
// });

// # react route 설정
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('*', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
