import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js';
import App from './views/App';

const store = createStore(reducer);

const render = () => {
  ReactDom.render(
      <App store={store}/>,
    document.getElementById('app')
  );
};

/*
This works for now since this app is not complicated
enough to justify the use of react-redux and the use of
presentational and container components.
*/
store.subscribe(render);
render();