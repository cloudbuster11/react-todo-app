import React from 'react';
import { useState } from 'react';

import AddNewCollection from '../AddNewCollection/AddNewCollection';

import './Form.css';

export default function Form({ addTask, uniqueCollections, filterCollection }) {
  const [name, setName] = useState('');
  const [targetCollection, setTargetCollection] = useState(filterCollection);

  function handleSubmitNewTask(e) {
    e.preventDefault();
    if (name) addTask(name, targetCollection);
    setName('');
  }

  function handleChangeNewTask(e) {
    setName(e.target.value);
  }

  function handleCategoryNewTask(e, category) {
    e.preventDefault();
    setTargetCollection(category);
  }

  function handleNewCategoryInput(e) {
    setTargetCollection(e.target.value);
  }

  const collectionBtns = uniqueCollections.map((collection) => {
    return (
      <AddNewCollection
        isPressed={collection === targetCollection}
        collection={collection}
        key={collection}
        setTargetCollection={setTargetCollection}
        handleCategoryNewTask={handleCategoryNewTask}
      />
    );
  });

  return (
    <form className='addtask__container'>
      <input
        type='text'
        className='addtask__input'
        name='text'
        autoComplete='off'
        value={name}
        placeholder='Add a task'
        onChange={handleChangeNewTask}
      />
      <button type='submit' className='btn btn-addtask' onClick={handleSubmitNewTask}>
        +
      </button>
      <p className='addtask__collectionstitle'>Where do you want it?</p>
      {collectionBtns}
      <input
        type='text'
        className='addtask__newcollection'
        placeholder='Create a new Collection'
        onChange={(e) => {
          handleNewCategoryInput(e);
        }}
      ></input>
    </form>
  );
}
