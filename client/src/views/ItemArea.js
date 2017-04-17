import React from 'react';
import Item from './Item.js';

export default class ItemArea extends React.Component {

  render() {
    return (
      <div className="itemArea">
        {this.props.store.getState().map(({text, isCollapse}, index) => <Item key={index} store={this.props.store} index={index} text={text} isCollapse={isCollapse} /> )}
      </div>
    );
  }

}
