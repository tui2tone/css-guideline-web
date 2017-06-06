import React, { Component } from 'react';
import Highlight from 'react-highlight';
import cx from 'classnames';

class BoxSizing extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			margin: false,
			padding: false,
			border: false,
			mode: 'border-box'
		}	

		this.onToggle = this.onToggle.bind(this)
		this.onToggleMargin = this.onToggleMargin.bind(this)
		this.onTogglePadding = this.onTogglePadding.bind(this)
		this.onToggleBorder = this.onToggleBorder.bind(this)
		this.onToggleContentBox = this.onToggleContentBox.bind(this)
		this.onToggleBorderBox = this.onToggleBorderBox.bind(this)
	}

	onToggle(key) {
		this.setState({ [key]: !this.state[key] })
	}

	onToggleMargin() {
		this.onToggle('margin')
	}

	onTogglePadding() {
		this.onToggle('padding')
	}

	onToggleBorder() {
		this.onToggle('border')
	}

	onToggleContentBox() {
		this.setState({ mode: 'content-box' })
	}

	onToggleBorderBox() {
		this.setState({ mode: 'border-box' })
	}

	render() {
		const { margin, padding, border, mode } = this.state
		const marginClass = cx('button', { 'is-active': margin })
		const paddingClass = cx('button', { 'is-active': padding })
		const borderClass = cx('button', { 'is-active': border })
		const borderBoxClass = cx('button', { 'is-active':  mode == 'border-box' })
		const contentBoxClass = cx('button', { 'is-active':  mode == 'content-box' })
		const boxClass = cx('box-model', { 'is-margin': margin, 'is-padding': padding, 'is-border': border, 'is-content-box': mode == 'content-box' })
		let content = 'box-sizing: ' + mode + ';\nwidth: 100%;'

		if(margin) {
			content += '\nmargin: 20px;'
		}

		if(padding) {
			content += '\npadding: 20px;'
		}

		if(border) {
			content += '\nborder: 5px solid #999;'
		}

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
					        How to calculate size of box model
					      </h1>
								<ul className="list">
									<li>content-box</li>
									<li>border-box</li>
								</ul>
					     	<div className="action">
									<div className="field has-addons">
									  <p className="control is-label">
									  	Box-Sizing:
									  </p>
									  <p className="control">
											<button className={contentBoxClass} onClick={this.onToggleContentBox}>content-box</button>
										</p>
									  <p className="control">
											<button className={borderBoxClass} onClick={this.onToggleBorderBox}>border-box</button>
										</p>
									</div>
									<div className="field has-addons">
									  <p className="control is-label">
									  	Style:
									  </p>
									  <p className="control">
										<button className={marginClass} onClick={this.onToggleMargin}>Margin</button>
										</p>
									  <p className="control">
										<button className={paddingClass} onClick={this.onTogglePadding}>Pargin</button>
										</p>
									  <p className="control">
										<button className={borderClass} onClick={this.onToggleBorder}>Border</button>
										</p>
									</div>
					     	</div>
					    </div>
				  		<div className="column is-text-centered">
				  			<div className="browser-container">
				  				<div className="browser-header">
				  					<div className="circle"></div>
				  					<div className="circle"></div>
				  					<div className="circle"></div>
				  				</div>
				  				<div className="browser is-overflow-visible">
						  			<div className={boxClass}>
						  				<div className="space">Space</div>
						  			</div>
				  				</div>
					      	<Highlight className="css">
					      		{ content }
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

export default BoxSizing;