// @ts-check

const express = require('express');
const cors = require('cors');
const session = require('express-session');

const PORT = 9000;
const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'soo',
    resave: false,
    saveUninitialized: true,
    cookie: {
      // maxAge: 1000 * 60 * 60,
    },
  }),
);

// 라우터파일 작성 및 라우팅
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const chatRouter = require('./routes/chat');
const mysqlRouter = require('./routes/mysql');

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/chat', chatRouter);
app.use('/mysql', mysqlRouter);

// app.js 내에서 라우팅
// app.get('/', (req, res) => {
//   const str = 'GET Method';
//   const jsonStr = JSON.stringify(str);
//   res.send(jsonStr);
// });
// app.post('/', (req, res) => {
//   const str = 'POST Method';
//   const jsonStr = JSON.stringify(str);
//   res.send(jsonStr);
// });

// const obj1 = {
//   name: 'test',
// };
// const obj2 = {
//   name: 'test',
// };
// console.log(obj1 === obj2); // false (주소값을 비교함)

// const json1 = JSON.stringify(obj1);
// const json2 = JSON.stringify(obj2);
// console.log(json1 === json2); // true (stringify: 문자열로 변환하여 비교)

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행 중입니다.`);
});
