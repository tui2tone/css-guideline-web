import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import Layout from './components/layout/layout'
import Sizing from './components/sizing/sizing'
import Syntax from './components/syntax/syntax'

require('./app.scss')
require('highlight.js/styles/atom-one-dark.css')
require('icheck/skins/all.css')

ReactDOM.render(
  <div className="app-container">
  	<Header />
  	<Syntax />
  	<Layout />
  	<Sizing />
  </div>
  , document.getElementById('app'));