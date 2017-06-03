import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import Layout from './components/layout/layout'

require('./app.scss')

ReactDOM.render(
  <div className="app-container">
  	<Header />
  	<Layout />
  </div>
  , document.getElementById('app'));