const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
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

app.listen(3001, () => console.log('Server running on port 3001'));
