import React from 'react';

export default function Buttons ({store}) {
  const expandAll = () => {
    store.dispatch({ type: 'EXPAND_ALL'});
  };

  const collapseAll = () => {
    store.dispatch({ type: 'COLLAPSE_ALL'});
  };
  return (
    <div className='buttons'>
      <button onClick={expandAll}>Expand all</button>
      <button onClick={collapseAll}>Collapse all</button>
      <button>Toggle all</button>
      <button>Add</button>
    </div>
  );
}
