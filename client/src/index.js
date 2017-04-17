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

store.subscribe(render);
render();