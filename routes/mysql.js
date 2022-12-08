// @ts-check
// db 통신용 라우터 생성

const express = require('express');
const db = require('../controllers/mysqlController');

const router = express.Router();

router.get('/', (req, res) => {
  db.getUsers((data) => {
    res.send(data);
  });
});

module.exports = router;
