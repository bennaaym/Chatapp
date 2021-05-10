import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
 <Router>
    <React.StrictMode>
    <App />
  </React.StrictMode>
 </Router>,
  document.getElementById('root')
);

