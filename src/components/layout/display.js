import React, { Component } from 'react';
import Highlight from 'react-highlight';
import cx from 'classnames';

class Position extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			mode: 'block'
		}	

		this.onToggleBlock = this.onToggleBlock.bind(this)
		this.onToggleInline = this.onToggleInline.bind(this)
		this.onToggleInlineBlock = this.onToggleInlineBlock.bind(this)
	}


	onToggleBlock() {
		this.setState({ mode: 'block' })
	}

	onToggleInline() {
		this.setState({ mode: 'inline' })
	}

	onToggleInlineBlock() {
		this.setState({ mode: 'inlineBlock' })
	}

	getContent(mode) {
		switch(mode) {
			case 'block':
				return 'display: block;'
			case 'inline':
				return 'display: inline;'
			case 'inlineBlock':
				return 'display: inline-block;'
		}
	}

	getBrowserContent() {
		const { mode } = this.state
		const boxClass = cx('display-box', { 'is-block': mode == 'block', 'is-inline': mode == 'inline', 'is-inline-block': mode == 'inlineBlock' })


		if(mode === 'inline') {
			return <div className="browser">
				<span className="display-inline">Lorem ipsum dolor sit amet</span>
				<span className="display-inline">consectetur adipiscing elit,</span>
				<span className="display-inline">sed do eiusmod tempor incididunt</span>
				<span className="display-inline">ut labore et dolore magna aliqua.</span>
				<span className="display-inline">Ut enim ad minim veniam, quis nostrud</span>
				<span className="display-inline">exercitation ullamco</span>
				<span className="display-inline">Lorem ipsum dolor sit amet</span>
				<span className="display-inline">consectetur adipiscing elit,</span>
				<span className="display-inline">sed do eiusmod tempor incididunt</span>
				<span className="display-inline">ut labore et dolore magna aliqua.</span>
				<span className="display-inline">Ut enim ad minim veniam, quis nostrud</span>
				<span className="display-inline">exercitation ullamco</span>
			</div>
		}
		return <div className="browser">
						<div className={boxClass}>
							<div className="display-inner">Box 1</div>
						</div>
						<div className={boxClass}>
							<div className="display-inner">Box 2</div>
						</div>
						<div className={boxClass}>
							<div className="display-inner">Box 3</div>
						</div>
						<div className={boxClass}>
							<div className="display-inner">Box 4</div>
						</div>
						<div className={boxClass}>
							<div className="display-inner">Box 5</div>
						</div>
						<div className={boxClass}>
							<div className="display-inner">Box 6</div>
						</div>
						<div className={boxClass}>
							<div className="display-inner">Box 7</div>
						</div>
						<div className={boxClass}>
							<div className="display-inner">Box 8</div>
						</div>
					</div>
	}


	render() {
		const { mode } = this.state
		const blockClass = cx('button', { 'is-active':  mode == 'block' })
		const inlineClass = cx('button', { 'is-active':  mode == 'inline' })
		const inlineBlockClass = cx('button', { 'is-active':  mode == 'inlineBlock' })

		const highlightContent = this.getContent(mode)
		const browserContent = this.getBrowserContent(mode)

		return (
			<section className="hero is-fullheight is-display">
			  <div className="hero-body">
			    <div className="container">
			    	<div className="columns">
				  		<div className="column is-5">
					      <h1 className="title">
					        Display
					      </h1>
					      <h2 className="subtitle">
					        How relate with same level elements
					      </h2>
					     	<div className="group">
											<button className={inlineClass} onClick={this.onToggleInline}>inline</button>
											<button className={blockClass} onClick={this.onToggleBlock}>block</button>
											<button className={inlineBlockClass} onClick={this.onToggleInlineBlock}>inline-block</button>
								</div>
					    </div>
				  		<div className="column is-1"></div>
				  		<div className="column is-text-centered">
				  			<div className="browser-container">
				  				<div className="browser-header">
				  					<div className="circle"></div>
				  					<div className="circle"></div>
				  					<div className="circle"></div>
				  				</div>
				  				{browserContent}
					      	<Highlight className="css">
					      		{highlightContent}
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

export default Position;