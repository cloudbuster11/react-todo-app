const todoModel = require('./models');

exports.getAllTodos = async (req, res) => {
  try {
    const todoList = await todoModel.find();

    res.status(200).json({
      status: 'success',
      results: todoList.length,
      data: {
        todoList: todoList,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTodo = async (req, res) => {
  console.log(req.body);
  try {
    const newTodo = await todoModel.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        todoList: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent',
    });
  }
};

exports.deleteTodo = async (req, res) => {
  console.log(req.params.id);
  try {
    await todoModel.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.uppdateTodo = async (req, res) => {
  try {
    const todo = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
