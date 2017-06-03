import React, { Component } from 'react';

import Header from './header'
import BoxModel from './box-model'
import BoxSizing from './box-sizing'

class Layout extends Component {

  render() {
    return (
    	<div>
    		<Header />
    		<BoxModel />
    		<BoxSizing />
    	</div>
    )
  }
}

export default Layout;