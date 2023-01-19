import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Api } from './api';

// const DATA = Api;

const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true },
  { id: 'todo-1', name: 'Sleep', completed: false },
  { id: 'todo-2', name: 'Repeat', completed: false },
];
// console.log(DATA);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(Api);
root.render(
  <React.StrictMode>
    <App tasks={Api} />
    {/* <Api /> */}
  </React.StrictMode>
);
