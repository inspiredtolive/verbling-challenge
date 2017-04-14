import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.collapseText = (props.body.length < 67) ? props.body : props.body.substr(0, 64).trim().concat('...'),
    this.state = {
      isCollapse: true,
    };
  }

  toggleCollapse () {
    this.setState({isCollapse: !this.state.isCollapse});
  }

  render() {
    if (this.state.isCollapse) {
      return <div className='item itemCollapse' onClick={this.toggleCollapse.bind(this)}>{this.collapseText}</div>;
    } else {
      return <div className='item' onClick={this.toggleCollapse.bind(this)}>{this.props.body}</div>;
    }
  }

}
