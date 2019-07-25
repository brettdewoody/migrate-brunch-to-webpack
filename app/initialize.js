import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

import css from './styles/application.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
