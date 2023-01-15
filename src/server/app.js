const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const createUserRouter = require('./routes/CreateUserRoutes');
const loginUserRouter = require('./routes/LoginUserRoutes');

const app = express();

app.use(express.json());

// Routes

app.use('/api', todoRouter);
app.use('/register', createUserRouter);
app.use('/login', loginUserRouter);

module.exports = app;
