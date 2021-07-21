import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './css/style.css';
import './css/style.css.map';
import './css/vendor/bootstrap.min.css';
import './css/vendor/animate.min.css';
import './css/vendor/font-awesome.min.css';
import './css/vendor/magnific-popup.css';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

reportWebVitals();
