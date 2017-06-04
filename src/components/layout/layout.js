import React, { Component } from 'react';

import Header from './header'
import BoxModel from './box-model'
import BoxSizing from './box-sizing'
import Position from './position'
import Display from './display'
import Float from './float'

class Layout extends Component {

  render() {
    return (
    	<div>
    		<Header />
    		<BoxModel />
    		<BoxSizing />
    		<Position />
    		<Display />
    		<Float />
    	</div>
    )
  }
}

export default Layout;