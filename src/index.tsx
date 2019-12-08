import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

const renderMethod =
  process.env.NODE_ENV === 'production' ? ReactDOM.hydrate : ReactDOM.render;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}

renderMethod(<App />, document.querySelector('#root'));
