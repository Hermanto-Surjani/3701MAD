const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(express.json());

// GET example
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

// POST example
app.post('/api/profile', (req, res) => {
  const { name } = req.body;
  res.json({ reply: `Received your data, ${name}` });
});

app.post('/profile', (req, res) => {
  const userData = req.body;
  res.send(`Received your data, ${userData.name}`);
});
app.use(express.urlencoded({ extended: true }));
app.post('/form', (req, res) => {
  const username = req.body.username;
  res.send(`Username is ${username}`);
});

app.get('/api', (req, res) => {
  const authToken = req.headers['authorization'];
  res.send(`Your auth token: ${authToken}`);
});

app.get('/dashboard', (req, res) => {
  const sessionId = req.cookies.session_id;
  res.send(`Session ID: ${sessionId}`);
});

app.listen(3001, () => console.log('Server running on port 3001'));
