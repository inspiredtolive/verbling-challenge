import React from 'react';

export default function Item ({store, index, text, isCollapse}) {
  const toggleCollapse = () => {
    store.dispatch({ type: 'TOGGLE_COLLAPSE', index });
  };

  const collapseText = () => {
    return (text.length < 67) ? text : text.substr(0, 64).trim().concat('...');
  };

  if (isCollapse) {
    return <div className='item itemCollapse' onClick={toggleCollapse}>{collapseText()}</div>;
  } else {
    return <div className='item' onClick={toggleCollapse}>{text}</div>;
  }
}
