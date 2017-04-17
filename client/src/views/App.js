import React from 'react';
import SearchBar from './SearchBar.js';
import ItemArea from './ItemArea.js';
import Buttons from './Buttons.js';

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