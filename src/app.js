import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import Layout from './components/layout/layout'

require('./app.scss')
require('highlight.js/styles/atom-one-dark.css')
require('icheck/skins/all.css')

ReactDOM.render(
  <div className="app-container">
  	<Header />
  	<Layout />
  </div>
  , document.getElementById('app'));