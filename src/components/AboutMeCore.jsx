import React, { PureComponent } from 'react';

class AboutMeCore extends PureComponent {
    render() {
        return(
            <div id="colorlib-about">
			<div className="container">
				<div className="row text-center">
					<h2 className="bold">About</h2>
				</div>
				<div className="row row-padded-bottom">
					<div className="col-md-5 animate-box">
						<img className="img-responsive about-img" src="images/about.jpg" alt="html5 bootstrap template by colorlib.com" />
					</div>
					<div className="col-md-6 col-md-push-1 animate-box">
						<div className="about-desc">
							<h2><span>Tosh</span><span>Sharma</span></h2>
							<div className="desc">
								<div className="rotate">
									<h2 className="heading">About</h2>
								</div>
								<p>A small river named Duden 
                                    <a href="#">flows by their place</a>
                                    and supplies it with the necessary regelialia.
                                    It is a paradisematic country, in which roasted parts of sentences fly into
                                    your mouth. Even the all-powerful Pointing has no control about the
                                    blind texts it is an almost unorthographic life.</p>
								<p className="colorlib-social-icons">
									<a href="#"><i className="icon-facebook4"></i></a>
									<a href="#"><i className="icon-twitter3"></i></a>
									<a href="#"><i className="icon-googleplus"></i></a>
									<a href="#"><i className="icon-dribbble2"></i></a>
								</p>
								<p><a href="work.html" className="btn btn-primary btn-outline">View My Works</a></p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 animate-box">
						<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
					</div>
					<div className="col-md-4 animate-box">
						<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
					</div>
					<div className="col-md-4 animate-box">
						<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default AboutMeCore;