import React from 'react';

export default function Buttons ({store}) {
  const expandAll = () => {
    store.dispatch({ type: 'EXPAND_ALL'});
  };

  const collapseAll = () => {
    store.dispatch({ type: 'COLLAPSE_ALL'});
  };

  const toggleAll = () => {
    store.dispatch({ type: 'TOGGLE_ALL'});
  };
  return (
    <div className='buttons'>
      <button onClick={expandAll}>Expand all</button>
      <button onClick={collapseAll}>Collapse all</button>
      <button onClick={toggleAll}>Toggle all</button>
      <button>Add</button>
    </div>
  );
}
