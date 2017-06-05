import React, { Component } from 'react';
import Highlight from 'react-highlight';
import cx from 'classnames';

class Position extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			mode: 'relative'
		}	

		this.onToggleRelative = this.onToggleRelative.bind(this)
		this.onToggleAbsolute = this.onToggleAbsolute.bind(this)
		this.onToggleFixed = this.onToggleFixed.bind(this)
	}


	onToggleRelative() {
		this.setState({ mode: 'relative' })
	}

	onToggleAbsolute() {
		this.setState({ mode: 'absolute' })
	}

	onToggleFixed() {
		this.setState({ mode: 'fixed' })
	}

	getContent(mode) {
		switch(mode) {
			case 'relative':
				return 'position: relative;'
			case 'absolute':
				return 'position: absolute;\ntop: 0;\nleft: 0;\nwidth: 50%;'
			case 'fixed':
				return 'position: fixed;\ntop: 0;\nleft: 0;\nwidth: 50%;'
		}
	}


	render() {
		const { mode } = this.state
		const relativeClass = cx('button', { 'is-active':  mode == 'relative' })
		const absoluteClass = cx('button', { 'is-active':  mode == 'absolute' })
		const fixedClass = cx('button', { 'is-active':  mode == 'fixed' })

		const content = this.getContent(mode)

		return (
			<section className="hero is-fullheight is-position">
			  <div className="hero-body">
			    <div className="container">
			    	<div className="columns">
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
					      		{content}
					      	</Highlight>
				  			</div>
				  		</div>
				  		<div className="column">
					      <h1 className="title">
					        Position
					      </h1>
					      <h1 className="subtitle">
					        Where element should be place in layer
					      </h1>
								<ul className="list">
									<li>Relative</li>
									<li>Absolute</li>
									<li>Fixed</li>
								</ul>
					     	<div className="action">
									<div className="field has-addons">
									  <p className="control is-label">
									  	position:
									  </p>
									  <p className="control">
											<button className={relativeClass} onClick={this.onToggleRelative}>relative</button>
										</p>
									  <p className="control">
											<button className={absoluteClass} onClick={this.onToggleAbsolute}>absolute</button>
										</p>
									  <p className="control">
											<button className={fixedClass} onClick={this.onToggleFixed}>fixed</button>
										</p>
									</div>
								</div>
					    </div>
					  </div>
			    </div>
			  </div>
			</section>

		)
	}
}

export default Position;