const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/users', (req, res) => {
  console.log({ req, res });
  res.send({
    express: [
      { index: 1, name: '재윤' },
      { index: 2, name: '현아' },
    ],
  });
});
app.get('/user/:id', (req, res) => {
  res.send('user/id');
  console.log({ reqParams: req.params });
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
