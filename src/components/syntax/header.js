import React, { Component } from 'react';

class Header extends Component {

  render() {
  	const title = '{ CSS }'
    return (
      <section className="hero is-fullheight is-syntax">
				<div className="hero-body">
			    <div className="container has-text-centered">
			      <h1 className="title">
			        Syntax
			      </h1>
			    </div>
			  </div>
			</section>
    )
  }
}

export default Header;