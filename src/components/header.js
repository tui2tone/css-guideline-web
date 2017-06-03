import React, { Component } from 'react';

class Header extends Component {

  render() {
  	const title = '{ CSS }'
    return (
      <section className="hero is-fullheight is-header is-bold">
			  <div className="hero-body">
			    <div className="container">
			      <h1 className="title">
			        { title }
			      </h1>
			      <h2 className="subtitle">
			        Guideline
			      </h2>
			    </div>
			  </div>
			</section>
    )
  }
}

export default Header;