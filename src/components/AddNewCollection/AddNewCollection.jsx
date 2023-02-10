import './AddNewCollection.css';

export default function AddNewCollection({
  uniqueCollections,
  filterCollection,
  handleCategoryNewTask,
  handleNewCategoryInput,
  isPressed,
  collection,
  setTargetCollection,
}) {
  // const collectionList = uniqueCollections.map((collection) => {
  //   if (filterCollection === collection) {
  //     return (
  //       <button
  //         key={uniqueCollections.indexOf(collection)}
  //         className='btn btn-border btn-active'
  //         aria-pressed={isPressed}
  //         style={isPressed ? { backgroundColor: 'red' } : null}
  //         value={collection}
  //         onClick={(e) => {
  //           handleClick(e);
  //           console.log(isPressed);
  //         }}
  //       >
  //         + {collection}
  //       </button>
  //     );
  //   }
  //   return (
  //     <button
  //       key={uniqueCollections.indexOf(collection)}
  //       className='btn btn-border'
  //       aria-pressed={isPressed}
  //       style={isPressed ? { backgroundColor: 'red' } : null}
  //       value={collection}
  //       onClick={(e) => {
  //         handleClick(e);
  //         console.log(isPressed);
  //       }}
  //     >
  //       + {collection}
  //     </button>
  //   );
  // });

  // function handleClick(e) {
  //   e.preventDefault();
  //   handleCategoryNewTask(e.target.value);
  // }

  return (
    <button
      className='btn btn-border btn-collection'
      key={collection}
      aria-pressed={isPressed}
      style={isPressed ? { backgroundColor: '#17181f' } : null}
      onClick={(e) => handleCategoryNewTask(e, collection)}
    >
      {collection}
    </button>

    // <section className='addtask__categories'>
    //   <p className='addtask__collectionstitle'>Collections:</p>
    //   {collectionList}
    //   <input
    //     type='text'
    //     className='addtask__newcollection'
    //     placeholder='Create a new Collection'
    //     onChange={(e) => {
    //       handleNewCategoryInput(e);
    //     }}
    //   ></input>
    // </section>
  );
}
