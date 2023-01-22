import React, { useState, useEffect } from 'react';
// import API from './api';
import Todo from './Todo';
import Form from './Form';
import FilterButton from './FilterButton';
import axios from 'axios';
import Logout from './LogOut';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  // Hämtar data från api

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/api/');

      setTasks(result.data.data.todoList);
    };

    fetchData();
  }, []);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
  ));

  function toggleTaskCompleted(id, completed) {
    axios.patch(`http://localhost:3001/api/${id}`, { completed: !completed }).then((res) => {
      // console.log(res);
      // console.log(res.data);
    });

    const updatedTasks = tasks.map((task) => {
      if (id === task._id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        key={task._id}
        id={task._id}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  // Id ska komma från mongodb.
  function addTask(name) {
    const newTask = { name, completed: false };

    axios.post(`http://localhost:3001/api/`, newTask).then((res) => {
      // console.log(res);
      // console.log(res.data);
    });
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    axios.delete(`http://localhost:3001/api/${id}`);
    const remainingTasks = tasks.filter((task) => id !== task._id);

    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    axios.patch(`http://localhost:3001/api/${id}`, { name: newName }).then((res) => {
      // console.log(res);
      // console.log(res.data);
    });

    const editedTaskList = tasks.map((task) => {
      if (id === task._id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  return (
    <div className='todoapp stack-large'>
      <Logout />
      <h1>React Todo App</h1>
      <Form addTask={addTask} />
      <div className='filters btn-group stack-exception'>{filterList}</div>
      <h2 id='list-heading'>{headingText}</h2>
      <ul className='todo-list stack-large stack-exception' aria-labelledby='list-heading'>
        {taskList}
      </ul>
    </div>
  );
}

export default TodoApp;
