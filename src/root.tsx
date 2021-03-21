import React from 'react';
import ReactDom from 'react-dom';
import { Katalk } from './components/Katalk';
import { store } from './store';
import { Provider } from 'react-redux';
ReactDom.render(
  <Provider store={store}>
    <Katalk />
  </Provider>,
  document.querySelector('#root')
);
