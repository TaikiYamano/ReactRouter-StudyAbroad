import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header';
import Top from './components/Top/Top';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Top} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
