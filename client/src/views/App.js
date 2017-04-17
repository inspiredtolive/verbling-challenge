import React from 'react';
import SearchBar from './SearchBar.js';
import ItemArea from './ItemArea.js';
import Buttons from './Buttons.js';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1>Verbling Challenge</h1>
        <SearchBar store={this.props.store}/>
        <ItemArea store={this.props.store}/>
        <Buttons store={this.props.store}/>
      </div>
    );
  }

}