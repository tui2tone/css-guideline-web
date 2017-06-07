import React, { Component } from 'react';

import Query from './query'
import Pseudo from './pseudo'
import BasicProperty from './basic-property'
import Header from './header'

class Syntax extends Component {

  render() {
    return (
    	<div>
    		<Header />
    		<Query />
    		<Pseudo />
    		<BasicProperty />
    	</div>
    )
  }
}

export default Syntax;