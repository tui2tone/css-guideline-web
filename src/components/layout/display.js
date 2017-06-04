import React, { Component } from 'react';
import Highlight from 'react-highlight';
import cx from 'classnames';

class Display extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
		}	
	}

	render() {

		return (
			<section className="hero is-fullheight is-position">
			  <div className="hero-body">
			    <div className="container">
			    	<div className="columns">
				  		<div className="column">
					      <h1 className="title">
					        Display
					      </h1>
					      <h1 className="subtitle">
					        Where element should be place in
					      </h1>
								<ul className="list">
									<li>Block</li>
									<li>Inline</li>
									<li>Inline-block</li>
								</ul>
					     	<div className="action">
				     			<h4>Action</h4>
					     	</div>
					    </div>
				  		<div className="column is-text-centered">
				  			<div className="browser-container">
				  				<div className="browser-header">
				  					<div className="circle"></div>
				  					<div className="circle"></div>
				  					<div className="circle"></div>
				  				</div>
				  				<div className="browser">
				  				</div>
					      	<Highlight className="css">
					      	</Highlight>
				  			</div>
				  		</div>
					  </div>
			    </div>
			  </div>
			</section>

		)
	}
}

export default Display;