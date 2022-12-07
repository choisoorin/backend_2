// @ts-check
const express = require('express');

const router = express.Router();

// Req.query
router.get('/', (req, res) => {
  const str = `쿼리로 받은 id 값은 ${req.query.id}, password값은 ${req.query.password} 입니다.`;
  // http://localhost:4000/user/?id=soo&password=1234 -> "쿼리로 받은 id 값은 soo이고, password값은 1234 입니다."
  const json = JSON.stringify(str);
  res.send(json);
});

// Req.params
router.get('/id/:id', (req, res) => {
  const str = `파라미터로 받은 id 값은 ${req.params.id}입니다`;
  // http://localhost:4000/user/id/soo -> "파라미터로 받은 id 값은 soo입니다"
  const json = JSON.stringify(str);
  res.send(json);
});

router.post('/', (req, res) => {
  // req.body.__ -> ejs input 태그의 *id* 값을 받아옴!!
  const str = `form 태그로부터 받은 id 값은 ${req.body.id}, password 값은 ${req.body.password}입니다.`;
  // http://localhost:4000/user/id/soo -> "파라미터로 받은 id 값은 soo입니다"
  const json = JSON.stringify(str);
  res.send(json);
});

module.exports = router;
