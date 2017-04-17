import React from 'react';

export default function SearchBar ({store}) {
  const onInput = ({target}) => {
    store.dispatch({ type: 'CHANGE_FILTER', filter: target.value });
  };
  return <input type='search' className='searchBar' onInput={onInput} placeholder='Search'/>;
}
