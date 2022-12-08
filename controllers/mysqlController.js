// @ts-check

const connection = require('./mysqlConnect');

// 모듈을 한번에 빼기 위해 객체를 만들어 사용
const db = {
  getUsers: (cb) => {
    connection.query('SELECT * FROM overall.user;', (err, data) => {
      if (err) throw err;
      console.log(data);
      cb(data);
    });
  },
  selectUser: (userId, cb) => {
    connection.query(
      `SELECT * FROM overall.user WHERE USERID='${userId}';`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },
};

module.exports = db;
