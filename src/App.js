import React, { useState, useEffect } from 'react';
// import API from './api';
import TodoApp from './components/TodoApp';
// import Todo from './components/Todo';
// import Form from './components/Form';
// import FilterButton from './components/FilterButton';
// import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FreeComponent from './components/FreeComponent';
import Account from './components/Account';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <>
      {/* <TodoApp /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Account />} />
          <Route exact path='/free' element={<FreeComponent />} />

          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='todo' element={<TodoApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Account /> */}
    </>
  );
}

export default App;
