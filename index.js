// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// 미들웨어 설정
app.use(express.json());

// 라우트 정의
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
