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
				return 'position: absolute;\ntop: 0;\nleft: 0;\nwidth: 80%;'
			case 'fixed':
				return 'position: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;'
		}
	}

	getBrowserContent(mode) {
		switch(mode) {
			case 'relative':
				return <div className="browser">
								<div className="position-container">
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="display-box">Box</div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
								</div>
				  		</div>
			case 'absolute':
				return <div className="browser">
								<div className="position-container">
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="display-box is-absolute">Box</div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
								</div>
				  		</div>
			case 'fixed':
				return <div className="browser">
								<div className="display-box is-fixed">Box</div>
								<div className="position-container">
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
								</div>
				  		</div>
		}
	}


	render() {
		const { mode } = this.state
		const relativeClass = cx('button', { 'is-active':  mode == 'relative' })
		const absoluteClass = cx('button', { 'is-active':  mode == 'absolute' })
		const fixedClass = cx('button', { 'is-active':  mode == 'fixed' })

		const content = this.getContent(mode)
		const browserContent = this.getBrowserContent(mode)

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
				  				{ browserContent }
					      	<Highlight className="css">
					      		{ content }
					      	</Highlight>
				  			</div>
				  		</div>
				  		<div className="column is-1"></div>
				  		<div className="column is-5">
					      <h1 className="title">
					        Position
					      </h1>
					      <h1 className="subtitle">
					        Where element should be place in layer
					      </h1>
					     	<div className="group">
									<button className={relativeClass} onClick={this.onToggleRelative}>relative</button>
									<button className={absoluteClass} onClick={this.onToggleAbsolute}>absolute</button>
									<button className={fixedClass} onClick={this.onToggleFixed}>fixed</button>
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