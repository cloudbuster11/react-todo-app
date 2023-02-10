import './AddNewCollection.css';

export default function AddNewCollection({ handleCategoryNewTask, isPressed, collection }) {
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
  );
}
