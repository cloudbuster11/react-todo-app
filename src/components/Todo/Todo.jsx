import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import './Todo.css';

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName('');
    setEditing(false);
  }

  const editingTemplate = (
    <form className='todo__item' onSubmit={handleSubmit}>
      <div className='todo__input'>
        <label className='todo__label' htmlFor={props.id}>
          Edit Task
        </label>
        <input
          id={props.id}
          className='todo__text'
          type='text'
          onChange={handleChange}
          placeholder={props.name}
        />
      </div>
      <div className='todo__btns'>
        <button type='button' className='btn btn-border' onClick={() => setEditing(false)}>
          Cancel
          <span className='visually-hidden'></span>
        </button>
        <button type='submit' className='btn btn-border'>
          Save
          <span className='visually-hidden'> </span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <article className='todo__item'>
      <section className='todo__info'>
        <input
          id={props.id}
          type='checkbox'
          className='checkmark'
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id, props.completed)}
        />
        <label className='todo__title' htmlFor={props.id}>
          {props.name}
        </label>
        {/* <FontAwesomeIcon id='todo__edit__btn' icon={faPenToSquare} /> */}
      </section>
      <section className='todo__btns'>
        <button type='button' className='btn btn-border' onClick={() => setEditing(true)}>
          Edit <span className='visually-hidden'></span>
        </button>
        <button
          type='button'
          className='btn btn-border btn-delete'
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className='visually-hidden'></span>
        </button>
      </section>
    </article>
  );

  return (
    <li id={props.id} className='todo__listitem'>
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}
