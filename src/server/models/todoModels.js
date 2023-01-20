const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const TodoModel = mongoose.model('todoList', TodoSchema);

module.exports = TodoModel;
