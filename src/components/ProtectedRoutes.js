import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import TodoApp from './TodoApp';
const cookies = new Cookies();

export default function ProtectedRoutes({ element: Element, ...rest }) {
  const location = useLocation();
  console.log(Element);

  const token = cookies.get('TOKEN');

  if (!token) {
    return (
      <Navigate
        to={{
          pathname: '/login',
          state: {
            from: location,
          },
        }}
      />
    );
  } else if (token) {
    return <TodoApp />;
  }
}
