const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const createUserRouter = require('./routes/CreateUserRoutes');
const loginUserRouter = require('./routes/LoginUserRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());

// Cors
app.use(cors());

// Routes

app.use('/api', todoRouter);
app.use('/register', createUserRouter);
app.use('/login', loginUserRouter);

module.exports = app;
