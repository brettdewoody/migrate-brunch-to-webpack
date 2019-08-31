import ReactDOM from 'react-dom';
import React from 'react';
import App from '../components/App';

import css from '../styles/application.css';

export { someFunc } from './foo';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
