// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// 미들웨어 설정
app.use(express.json());

//CORS 설정
app.use(cors());

// 라우트 정의
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: todos.length + 1, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.sendStatus(204);
});

// Vercel로 배포될 때 사용되는 핸들러
module.exports = app;

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
