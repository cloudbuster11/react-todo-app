import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
// import { Api } from './api';

// const DATA = Api;

// const DATA = [
//   { id: 'todo-0', name: 'Eat', completed: true },
//   { id: 'todo-1', name: 'Sleep', completed: false },
//   { id: 'todo-2', name: 'Repeat', completed: false },
// ];
// console.log(DATA);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Register />
    <Login />
  </React.StrictMode>
);
