const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const createUserRouter = require('./routes/CreateUserRoutes');
const loginUserRouter = require('./routes/LoginUserRoutes');
const cors = require('cors');
const auth = require('./auth.js');

const app = express();

app.use(express.json());

// Cors
app.use(cors());

// Routes

app.use('/api', todoRouter);
app.use('/register', createUserRouter);
app.use('/login', loginUserRouter);

// free endpoint
app.get('/free-endpoint', (req, res) => {
  res.json({ message: 'You are free to access me anytime' });
});

// authentication endpoint
app.get('/auth-endpoint', auth, (req, res) => {
  res.json({ message: 'You are authorized to access me' });
});

module.exports = app;
