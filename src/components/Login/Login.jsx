import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import './Login.css';

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
      <section className='form'>
        <h2 className='form__title'>Sign in.</h2>
        <form className='form__body' onSubmit={(e) => handleSubmit(e)}>
          <article className='email'>
            <input
              type='email'
              id='login__email'
              className='form__input'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </article>
          <article className='password'>
            <input
              className='form__input'
              type='password'
              id='login__password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </article>
          <article className='form__footer'>
            <button type='submit' className='btn btn-login btn-colored' onClick={(e) => handleSubmit(e)}>
              Sign in
            </button>
            {/* display success message */}
            {!login ? <p className='text-danger'>You Are Not Logged in</p> : null()}
          </article>
        </form>
      </section>
    </>
  );
}
