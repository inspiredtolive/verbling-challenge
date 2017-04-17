import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleCollapse () {
    this.props.store.dispatch({ type: 'TOGGLE_COLLAPSE', index: this.props.index });
  }

  collapseText() {
    return (this.props.text.length < 67) ? this.props.text : this.props.text.substr(0, 64).trim().concat('...');
  }

  render() {
    if (this.props.isCollapse) {
      return <div className='item itemCollapse' onClick={this.toggleCollapse.bind(this)}>{this.collapseText()}</div>;
    } else {
      return <div className='item' onClick={this.toggleCollapse.bind(this)}>{this.props.text}</div>;
    }
  }

}
