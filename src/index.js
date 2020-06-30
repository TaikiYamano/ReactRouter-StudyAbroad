import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header';
import Top from './components/Top/Top';
import Study from './components/Study/Study';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';


ReactDOM.render(
  
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Top} />
      <Route path="/study" exact component={Study} />
    </BrowserRouter>
  ,
  document.getElementById('root')
);
