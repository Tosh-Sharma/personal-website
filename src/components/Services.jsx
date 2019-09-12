import React, { PureComponent } from 'react';

class Services extends PureComponent {
    render() {
        return (
            <div id="colorlib-services">
			<div className="container">
				<div className="row text-center">
					<h2 className="bold">Goals</h2>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="services-flex">
							<div className="one-third">
								<div className="row">
									<div className="col-md-12 col-md-offset-0 animate-box intro-heading">
										<span>Target</span>
										<h2>Goals</h2>
										<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="rotate">
											<h2 className="heading">Goals</h2>
										</div>
									</div>
									<div className="col-md-12">
										<div className="services animate-box">
											<h3>1 - High Quality Theme</h3>
											<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
										</div>
										<div className="services animate-box">
											<h3>2 - Customer Satisfaction</h3>
											<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
										</div>
										<div className="services animate-box">
											<h3>3 - Well Mentained Sites</h3>
											<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="one-forth services-img" styles="background-image: url(images/services-img-1.jpg);">
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
        );
    }
}

export default Services;