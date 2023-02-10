import React from 'react';
// import { useButton } from 'react-aria';

export default function CollectionItem({ name, isPressed, setFilterCollection }) {
  // const FILTER_MAP = {
  //   All: () => true,
  //   Active: (task) => !task.completed,
  //   Completed: (task) => task.completed,
  // };

  // const uniqueCollections = [];
  // allTasks.map((task) => {
  //   if (uniqueCollections.indexOf(task.collectionName) === -1) {
  //     uniqueCollections.push(task.collectionName);
  //   }
  // });

  // let FILTER_MAP = {
  //   All: () => 'All',
  // };

  // uniqueCollections.map((collection) => {
  //   FILTER_MAP[collection] = collection;
  // });

  // console.log(FILTER_MAP);

  // const collectionList = uniqueCollections.map((task) => {
  //   if (displayedCollection === task) {
  //     return (
  //       <li
  //         key={uniqueCollections.indexOf(task)}
  //         className='collections__item'
  //         onClick={() => {
  //           handleCollectionClick(task);
  //         }}
  //         style={{ backgroundColor: '#272732' }}
  //       >
  //         {task}
  //       </li>
  //     );
  //   }
  //   return (
  //     <li
  //       key={uniqueCollections.indexOf(task)}
  //       className='collections__item'
  //       onClick={() => {
  //         handleCollectionClick(task);
  //       }}
  //     >
  //       {task}
  //     </li>
  //   );
  // });

  return (
    <li
      className='collections__item'
      aria-pressed={isPressed}
      style={isPressed ? { backgroundColor: '#272732' } : null}
      onClick={() => {
        setFilterCollection(name);
      }}
    >
      {name}
    </li>
  );
}

/* {displayedCollection === 'All' ? (
  <li
    key='All'
    className='collections__item'
    onClick={() => {
      handleCollectionClick('All');
    }}
    style={{ backgroundColor: '#272732' }}
  >
    All Tasks
  </li>
) : (
  <li
    key='All'
    className='collections__item'
    onClick={() => {
      handleCollectionClick('All');
    }}
  >
    All Tasks
  </li>
)}

{collectionList} */
