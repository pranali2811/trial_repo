import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Dashboard from './dashboard';
import Npmapi from './npmapi';
import Serpapi from './serpapi';
import './dash.css'
import './style.css'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <div className="g-signin">
      <Serpapi />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


