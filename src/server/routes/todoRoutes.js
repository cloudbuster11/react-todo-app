const express = require('express');
const controller = require('../controller/todoController');

const router = express.Router();

router.route('/').get(controller.getAllTodos).post(controller.createTodo);

router.route('/:id').get(controller.getTodo).patch(controller.uppdateTodo).delete(controller.deleteTodo);

module.exports = router;
