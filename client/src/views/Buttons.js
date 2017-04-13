import React from 'react';

export default class Buttons extends React.Component {

  render() {
    return (
      <div className='buttons'>
        <button>Expand all</button>
        <button>Collapse all</button>
        <button>Toggle all</button>
        <button>Add</button>
      </div>
    );
  }

}
