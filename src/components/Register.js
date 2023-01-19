import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submited!');
    // set configurations
    const configuration = {
      method: 'post',
      url: 'http://localhost:3001/register',
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Register</h2>
      <div className='form'>
        <form className='form-body' onSubmit={(e) => handleSubmit(e)}>
          {/* <div className='username'>
            <label className='form__label' htmlFor='firstName'>
              First Name{' '}
            </label>
            <input className='form__input' type='text' id='firstName' placeholder='First Name' />
          </div>
          <div className='lastname'>
            <label className='form__label' htmlFor='lastName'>
              Last Name{' '}
            </label>
            <input type='text' name='' id='lastName' className='form__input' placeholder='LastName' />
          </div> */}
          <div className='email'>
            <label className='form__label' htmlFor='email'>
              Email{' '}
            </label>
            <input
              type='email'
              id='email'
              className='form__input'
              placeholder='Email'
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
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className='confirm-password'>
            <label className='form__label' htmlFor='confirmPassword'>
              Confirm Password{' '}
            </label>
            <input
              className='form__input'
              type='password'
              id='confirmPassword'
              placeholder='Confirm Password'
            />
          </div> */}
          <div className='footer'>
            <button type='submit' className='btn' onClick={(e) => handleSubmit(e)}>
              Register
            </button>
            {register ? (
              <p className='text-success'>You Are Registered Successfully</p>
            ) : (
              <p className='text-danger'>You Are Not Registered</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
