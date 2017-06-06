import React, { Component } from 'react';
import ReactDOM from 'react-dom/server';
import Highlight from 'react-highlight';
import cx from 'classnames';
import Modal from 'react-modal';
import he from 'he';
import pretty from 'pretty';


class Float extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			mode: 'left',
			modeLeft: true,
			modeRight: false,
			isOpenCode: false,
			clearBoth: false
		}	


		this.onToggleLeft = this.onToggleLeft.bind(this)
		this.onToggleRight = this.onToggleRight.bind(this)
		this.onToggleClearBoth = this.onToggleClearBoth.bind(this)
	}


	onToggleLeft() {
		const { modeRight } = this.state;
		let mode = ''
		if(!this.state.modeLeft) { mode += 'left' }
		if(modeRight) { mode += 'right' }

		this.setState({ mode: mode, modeLeft: !this.state.modeLeft})
	}

	onToggleRight() {
		const { modeLeft } = this.state;
		let mode = ''
		if(modeLeft) { mode += 'left' }
		if(!this.state.modeRight) { mode += 'right' }

		this.setState({ mode: mode, modeRight: !this.state.modeRight})
	}


	getContent(mode) {
		switch(mode) {
			case 'left':
				return 'float: left;'
			case 'right':
				return 'float: right;'
		}
	}

	getBrowserContent(mode) {
		const { clearBoth } = this.state;

		switch(mode) {
			case 'left':
				return <div className="browser">
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								{ clearBoth ? <div className="clear-both"></div> : null }
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								{ clearBoth ? <div className="clear-both"></div> : null }
				  		</div>
			case 'right':
				return <div className="browser">
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								{ clearBoth ? <div className="clear-both"></div> : null }
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								{ clearBoth ? <div className="clear-both"></div> : null }
				  		</div>
			case 'leftright':
				return <div className="browser">
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								{ clearBoth ? <div className="clear-both"></div> : null }
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-left">Left</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								<div className="display-box is-float-right">Right</div>
								{ clearBoth ? <div className="clear-both"></div> : null }
				  		</div>
		}
	}

	onToggleClearBoth() {
		this.setState({ clearBoth: !this.state.clearBoth })
	}


	render() {
		const { mode, modeLeft, modeRight, isOpenCode, clearBoth } = this.state
		const leftClass = cx('button', { 'is-active':  modeLeft })
		const rightClass = cx('button', { 'is-active':  modeRight })
		const clearBothClass = cx('button', { 'is-active': clearBoth })

		const content = this.getContent(mode)
		const browserContent = this.getBrowserContent(mode)

		return (
			<section className="hero is-fullheight is-float">
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
					     	<div className="action">
									<div className="field has-addons">
									  <p className="control is-label">
									  	Style:
									  </p>
									  <p className="control">
											<button className={clearBothClass} onClick={this.onToggleClearBoth}>clear: both;</button>
										</p>
									</div>
								</div>
				  		</div>
				  		<div className="column is-1"></div>
				  		<div className="column is-5">
					      <h1 className="title">
					        Float
					      </h1>
					      <h1 className="subtitle">
					        Left & right handler for inline element 
					      </h1>
					     	<div className="group">
									<button className={leftClass} onClick={this.onToggleLeft}>left</button>
									<button className={rightClass} onClick={this.onToggleRight}>right</button>
								</div>
					    </div>
					  </div>
			    </div>
			  </div>
			</section>

		)
	}
}

export default Float;