import React, { Component } from 'react';

class BoxSizing extends Component {

	render() {
		return (
			<section className="hero is-fullheight is-box-sizing">
			  <div className="hero-body">
			    <div className="container">
			    	<div className="columns">
				  		<div className="column">
					      <h1 className="title">
					        Box Sizing
					      </h1>
					      <h1 className="subtitle">
					        Tell browser how to calculate size of box model
					      </h1>
					     	<div className="action">
				     			<h4>Action</h4>
									<button className="button is-small">Margin</button>
									<button className="button is-small">Pargin</button>
									<button className="button is-small">Border</button>
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
						  			<div className="box-model">
						  				Box
						  			</div>
				  				</div>
					      	<pre><code className="css">box-sizing: content-box;</code></pre>
				  			</div>
				  		</div>
					  </div>
			    </div>
			  </div>
			</section>

		)
	}
}

export default BoxSizing;