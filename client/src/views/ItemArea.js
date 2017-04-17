import React from 'react';
import Item from './Item.js';

export default function ItemArea ({store}) {
  let {items, filter} = store.getState();
  if (filter.trim() !== '') {
    items = items.filter(({text}) => text.indexOf(filter) !== -1);
  }
  return (
    <div className="itemArea">
      {items.map(({text, isCollapse}, index) => <Item key={index} store={store} index={index} text={text} isCollapse={isCollapse} /> )}
    </div>
  );
}
