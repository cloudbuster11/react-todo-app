import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: 'post',
      url: 'http://localhost:3001/login',
      data: {
        email,
        password,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        setLogin(true);
        // set the cookie
        cookies.set('TOKEN', result.data.token, {
          path: '/',
        });
        // redirect user
        window.location.href = '/todo';
      })
      .catch((err) => {
        err = new Error();
      });
  };

  return (
    <>
      <h2>Login</h2>
      <div className='form'>
        <form className='form-body' onSubmit={(e) => handleSubmit(e)}>
          <div className='email'>
            <label className='form__label' htmlFor='email'>
              Email{' '}
            </label>
            <input
              type='email'
              id='login__email'
              className='form__input'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='password'>
            <label className='form__label' htmlFor='password'>
              Password{' '}
            </label>
            <input
              className='form__input'
              type='password'
              id='login__password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='footer'>
            <button type='submit' className='btn' onClick={(e) => handleSubmit(e)}>
              Login
            </button>
            {/* display success message */}
            {login ? (
              <p className='text-success'>You Are Logged in Successfully</p>
            ) : (
              <p className='text-danger'>You Are Not Logged in</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
