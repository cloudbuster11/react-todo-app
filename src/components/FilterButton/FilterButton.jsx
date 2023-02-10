import React from 'react';

import './FilterButton.css';

export default function FilterButton(props) {
  return (
    <button
      type='button'
      className='btn btn-border btn-filter'
      aria-pressed={props.isPressed}
      style={props.isPressed ? { backgroundColor: '#17181f' } : null}
      onClick={() => props.setFilterActiveTasks(props.name)}
    >
      <span className='visually-hidden'>Show </span>
      <span>{props.name}</span>
      <span className='visually-hidden'> tasks</span>
    </button>
  );
}
