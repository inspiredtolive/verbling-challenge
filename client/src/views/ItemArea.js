import React from 'react';
import Item from './Item.js';

export default function ItemArea ({store}) {
  return (
    <div className="itemArea">
      {store.getState().map(({text, isCollapse}, index) => <Item key={index} store={store} index={index} text={text} isCollapse={isCollapse} /> )}
    </div>
  );
}
