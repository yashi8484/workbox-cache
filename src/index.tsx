import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

const renderMethod =
  process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;

renderMethod(<App />, document.querySelector('#root'));
