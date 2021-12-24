const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // console.log({ req, res });
  console.log('/users');
  res.send({
    result: [
      { index: 1, name: '재윤' },
      { index: 2, name: '현아' },
    ],
  });
});
// router.get('/', (req, res) => {
//   console.log('### users', res);
//   return res.json({ username: 'jyoon' });
// });

module.exports = router;
