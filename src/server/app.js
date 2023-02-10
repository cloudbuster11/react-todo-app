const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const loginUserRouter = require('./routes/LoginUserRoutes');
const cors = require('cors');
const auth = require('./auth.js');

const app = express();

app.use(express.json());

// Cors
let corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// Routes

app.use('/login', loginUserRouter);
app.use('/api', auth, todoRouter);

// authentication endpoint
// app.get('/auth-endpoint', auth, (req, res) => {
//   res.json({ message: 'You are authorized to access me' });
// });

module.exports = app;
