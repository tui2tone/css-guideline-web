import React, { Component } from 'react';

import Header from './header'
import BoxModel from './box-model'
import BoxSizing from './box-sizing'
import Position from './position'
import Display from './display'
import Float from './float'
import Overflow from './Overflow'
import Flexbox from './flexbox'

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
    		<Overflow />
    		<Flexbox />
    	</div>
    )
  }
}

export default Layout;