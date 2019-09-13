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
										{/* <span>Target</span> */}
										<h2>Goals</h2>
										{/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> */}
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
											<h3>1 - Build seamless solutions</h3>
											<p>What good is a solution if it doesn't solve your problem in the most seamless way possible.<br/>
											Technical people get sidelined in the technicalities and are often not able to see the bigger picture.<br/>
											<b>I <i>ALWAYS</i> want to see the bigger picture.</b>
											</p>
										</div>
										<div className="services animate-box">
											<h3>2 - Keep Learning and Growing</h3>
											<p>	The world is evolving, constantly so. <br/>
												First the Industrial Revolution, then the Information age and then, Internet. <br/>
												We do not know how the future will pan out. <br/>
												And being a 20 something kid on the block is hard. <br/>
												I am looking for a mentor to guide me, and if you think you can help,{' '}
												<a target="_blank" rel="noopener noreferrer" href="mailto: to1995sh@gmail.com">please reach out to me.</a>
											</p>
										</div>
										<div className="services animate-box">
											<h3>3 - Be Happy, Do what I love, grow rich doing that</h3>
											<p>
												You only live once. So I don't believe in a single minute of this life I have. <br/>
												I also wish to leave this world a better place than when I found it. <br/> <br/>
												I wish to change the world and make it into a better place, however I can. <br/>
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="one-forth services-img" styles="background-image: url(images/services-img-1.jpg);">
							</div> */}
						</div>
					</div>
				</div>
			</div>
        </div>
        );
    }
}

export default Services;