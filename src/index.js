import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom" 
import './index.css';
import { Gys } from './components/Gys';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Gys />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

