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
					<div class="owl-carousel3">
							<div class="item">
								<img class="img-responsive about-img" src="images/about.jpg" alt="html5 bootstrap template by colorlib.com" />
							</div>
							<div class="item">
								<img class="img-responsive about-img" src="images/about-2.jpg" alt="html5 bootstrap template by colorlib.com" />
							</div>
						</div>
					</div>
					<div className="col-md-6 col-md-push-1 animate-box">
						<div className="about-desc">
						<div class="owl-carousel3">
								<div class="item">
									<h2><span>Tosh</span><span>Sharma</span></h2>
								</div>
								<div class="item">
									<h2><span>I'm a</span><span>Software Engineer</span></h2>
								</div>
							</div>
							<div className="desc">
								<div className="rotate">
									<h2 className="heading">About</h2>
								</div>
								<p>
									Hi, I am a Professional Software Engineer who likes to build products.
									<br/>
									I currently work as a FullStack Developer in <a target="_blank" rel="noopener noreferrer" href="https://cimpress.com">Cimpress</a>.
									Mainly I love to solve complex problems leveraging the power of technology.<br/>
									If you have a problem for me to solve, feel free to reach out to me. I would love to hear from you. <br/>
									Apart from work, I enjoy travelling the world and if you'd like to see my world through photographs,
									look me on <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thetoshsharma">Instagram</a>
								</p>
								<p className="colorlib-social-icons">
									<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/toshsharma"><i className="icon-linkedin"></i></a>
									<a target="_blank" rel="noopener noreferrer" href="https://github.com/Tosh-Sharma"><i className="icon-github"></i></a>
									{/* <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@to1995sh"><i className="icon-blog"></i></a> */}
									<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thetoshsharma"><i className="icon-instagram"></i></a>
									<a target="_blank" rel="noopener noreferrer" href="mailto: to1995sh@gmail.com"><i className="icon-mail"></i></a>
									<a target="_blank" rel="noopener noreferrer" href="tel:+917977550919"><i className="icon-phone"></i></a>
								</p>
								{/* <p><a href="work.html" className="btn btn-primary btn-outline">View My Works</a></p> */}
							</div>
						</div>
					</div>
				</div>
				{/* <div className="row">
					<div className="col-md-4 animate-box">
						<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
					</div>
					<div className="col-md-4 animate-box">
						<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
					</div>
					<div className="col-md-4 animate-box">
						<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
					</div>
				</div> */}
			</div>
		</div>
        );
    }
}

export default AboutMeCore;