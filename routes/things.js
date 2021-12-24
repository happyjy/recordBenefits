const express = require('express');
const router = express.Router();

router.get('/getAll', (req, res) => {
  console.log('/things');
  res.send({
    result: [
      { index: 1, name: 'things1' },
      { index: 2, name: 'things2' },
    ],
  });
});
// router.get('/', (req, res) => {
//   console.log('### users', res);
//   return res.json({ username: 'jyoon' });
// });

module.exports = router;
