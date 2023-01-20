import React from 'react';
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import TodoApp from './TodoApp';
const cookies = new Cookies();

// receives component and any other props represented by ...rest
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
            //               // sets the location a user was about to access before being redirected to login
            from: location,
          },
        }}
      />
    );
  } else if (token) {
    return <TodoApp />;
  }
}

// return (
// this route takes other routes assigned to it from the App.js and return the same route if condition is met

// <Route
//   render={(props) => {
// get cookie from browser if logged in
// const token = cookies.get('TOKEN');

//     // returns route if there is a valid token set in the cookie
// if (token) {
//   return <Element {...props} />;
// } else {
//       // returns the user to the landing page if there is no valid token set
// return (
//   <Navigate
//     to={{
//       pathname: '/login',
//       state: {
//               // sets the location a user was about to access before being redirected to login
//               from: location,
//             },
//           }}
//         />
//       );
//     }
//   }}
// />
// }
// );
