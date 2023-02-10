import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import Todo from '../Todo/Todo';
import Form from '../Form/Form';
import FilterButton from '../FilterButton/FilterButton';
import Nav from '../Nav/Nav';
import CollectionList from '../CollectionList/CollectionList';

import './TodoApp.css';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function TodoApp() {
  const [allTasks, setAllTasks] = useState([]);
  const [filterActiveTasks, setFilterActiveTasks] = useState('All');
  const [filterCollection, setFilterCollection] = useState('All');

  const cookies = new Cookies();
  const TOKEN = cookies.get('TOKEN');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  };
  // console.log(TOKEN);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/api/', {
        headers: headers,
      });

      setAllTasks(result.data.data.todoList);
    };
    fetchData();
  });

  const FILTER_MAP_COLLECTIONS = {
    All: () => true,
  };

  const uniqueCollections = [];
  allTasks.map((task) => {
    if (uniqueCollections.indexOf(task.collectionName) === -1) {
      uniqueCollections.push(task.collectionName);
    }
  });

  uniqueCollections.map((collection) => {
    FILTER_MAP_COLLECTIONS[collection] = (task) => task.collectionName === collection;
  });

  const FILTER_COLLECTION_NAMES = Object.keys(FILTER_MAP_COLLECTIONS);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filterActiveTasks}
      setFilterActiveTasks={setFilterActiveTasks}
    />
  ));

  const taskList = allTasks
    // .filter((task) => task.collectionName === 'Work')
    .filter(FILTER_MAP_COLLECTIONS[filterCollection])
    .filter(FILTER_MAP[filterActiveTasks])
    .map((task) => (
      <Todo
        key={task._id}
        id={task._id}
        collectionName={task.collectionName}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  // Singular eller plural antal tasks i listan.
  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskNoun} remaining`;

  // ADD TASK
  function addTask(name, collectionName) {
    const newTask = { name, collectionName, completed: false };

    axios
      .post(`http://localhost:3001/api/`, newTask, {
        headers: headers,
      })
      .then((res) => {
        const id = res.data.data.todoList._id;
        newTask['_id'] = id;

        setAllTasks([newTask, ...allTasks]);
      });
  }

  // Toggle Completed
  function toggleTaskCompleted(id, completed) {
    axios
      .patch(`http://localhost:3001/api/${id}`, { completed: !completed }, { headers: headers })
      .then((res) => {});

    const updatedTasks = allTasks.map((task) => {
      if (id === task._id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setAllTasks(updatedTasks);
  }

  // Delete Task
  function deleteTask(id) {
    axios.delete(`http://localhost:3001/api/${id}`, { headers: headers });
    const remainingTasks = allTasks
      .filter(FILTER_MAP_COLLECTIONS[filterCollection])
      .filter((task) => id !== task._id);

    if (remainingTasks.length > 0) {
      setAllTasks(remainingTasks);
    } else {
      setFilterCollection('All');
    }
  }

  // Edit Task
  function editTask(id, newName) {
    axios
      .patch(
        `http://localhost:3001/api/${id}`,
        { name: newName },
        {
          headers: headers,
        }
      )
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
      });

    const editedTaskList = allTasks.map((task) => {
      if (id === task._id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setAllTasks(editedTaskList);
  }

  return (
    <div className='wrapper'>
      <Nav />
      <aside className='menu__collections'>
        <CollectionList
          FILTER_COLLECTION_NAMES={FILTER_COLLECTION_NAMES}
          filterCollection={filterCollection}
          setFilterCollection={setFilterCollection}
          FILTER_MAP_COLLECTIONS={FILTER_MAP_COLLECTIONS}
        />
      </aside>
      <main className='todos__container'>
        <section className='todos__header'>
          <button
            className='btn btn-back'
            onClick={() => {
              setFilterCollection('All');
            }}
          >
            &#60;
          </button>
          <h2 className='todo__activecategory'>{filterCollection}</h2>
        </section>
        <Form addTask={addTask} uniqueCollections={uniqueCollections} filterCollection={filterCollection} />
        <section className='todo__filterbtns'>{filterList}</section>
        <p className='tasks__remaining'>{headingText}</p>

        <ul className='todo-list'>{taskList}</ul>
      </main>
    </div>
  );
}

export default TodoApp;
