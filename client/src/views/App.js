import React from 'react';
import SearchBar from './SearchBar.js';
import ItemArea from './ItemArea.js';
import Buttons from './Buttons.js';

/*
  The store must be passed down to either
  read the state or to dispatch actions.
*/
export default function App ({store}) {
  return (
    <div className='app'>
      <h1>Verbling Challenge</h1>
      <SearchBar store={store}/>
      <ItemArea store={store}/>
      <Buttons store={store}/>
    </div>
  );
}