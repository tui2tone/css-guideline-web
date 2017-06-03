import React, { Component } from 'react';

class BoxModel extends Component {

	render() {
		return (
			<section className="hero is-fullheight is-box-model">
				<div className="hero-body">
					<div className="container">
						<div className="columns">
							<div className="column">
								<h1 className="title">
									Box Model
								</h1>
								<ul className="list">
									<li>Space</li>
									<li>Padding</li>
									<li>Border</li>
									<li>Margin</li>
								</ul>
							</div>
							<div className="column is-text-centered">
								<div className="box-model">
									<div className="margin">
										<div className="border">
											<div className="padding">	
												<div className="space">
													
													<div className="text">space</div>
												</div>
												<div className="text">padding</div>
											</div>
											<div className="text">border</div>
										</div>
										<div className="text">margin</div>
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

export default BoxModel;