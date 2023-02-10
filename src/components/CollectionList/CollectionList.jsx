import React from 'react';

import CollectionItem from '../CollectionItem/CollectionItem';

import './CollectionList.css';

export default function CollectionList({
  FILTER_COLLECTION_NAMES,
  filterCollection,
  setFilterCollection,
  FILTER_MAP_COLLECTIONS,
}) {
  // const [filterCollection, setFilterCollection] = useState('All');

  // const FILTER_MAP_COLLECTIONS = {
  //   All: () => 'All',
  // };

  // const uniqueCollections = [];
  // allTasks.map((task) => {
  //   if (uniqueCollections.indexOf(task.collectionName) === -1) {
  //     uniqueCollections.push(task.collectionName);
  //   }
  // });

  // uniqueCollections.map((collection) => {
  //   FILTER_MAP_COLLECTIONS[collection] = (collection) => collection;
  // });

  // const FILTER_COLLECTION_NAMES = Object.keys(FILTER_MAP_COLLECTIONS);

  function handleClick(e) {}

  const collectionItems = FILTER_COLLECTION_NAMES.map((name) => {
    return (
      <CollectionItem
        key={name}
        name={name}
        isPressed={name === filterCollection}
        setFilterCollection={setFilterCollection}
        FILTER_MAP_COLLECTIONS={FILTER_MAP_COLLECTIONS}
        filterCollection={filterCollection}
      />
    );
  });

  return (
    <>
      <h3 className='collections__title'>Collections</h3>
      <ul className='collections__container'>{collectionItems}</ul>
    </>
  );
}
