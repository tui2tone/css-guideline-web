import React, { Component } from 'react';

import Query from './query'
import Pseudo from './pseudo'
import BasicProperty from './basic-property'

class Syntax extends Component {

  render() {
    return (
    	<div>
    		<Query />
    		<Pseudo />
    		<BasicProperty />
    	</div>
    )
  }
}

export default Syntax;