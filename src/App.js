import React from 'react';
import TodoApp from './components/TodoApp';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='todo' element={<TodoApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
