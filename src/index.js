import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Header from './components/Header/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();