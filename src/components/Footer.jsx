import React, { PureComponent}  from 'react';

class Footer extends PureComponent {
    render() {
        return (
            <footer>
			<div id="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-pb-sm">
							<div className="row">
								<div className="col-md-10">
									<h2>Let's Talk</h2>
									<p>
										If you have queries to ask or problems that I can help solve, reach out to me.
									</p>
									<p><a href="#">to1995sh@gmail.com</a></p>
									<p className="colorlib-social-icons">
									<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/toshsharma"><i className="icon-linkedin"></i></a>
									<a target="_blank" rel="noopener noreferrer" href="https://github.com/Tosh-Sharma"><i className="icon-github"></i></a>
									{/* <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@to1995sh"><i className="icon-blog"></i></a> */}
									<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thetoshsharma"><i className="icon-instagram"></i></a>
									<a target="_blank" rel="noopener noreferrer" href="mailto: to1995sh@gmail.com"><i className="icon-mail"></i></a>
									<a target="_blank" rel="noopener noreferrer" href="tel:+917977550919"><i className="icon-phone"></i></a>
									</p>
								</div>
							</div>
						</div>

						{/* <div className="col-md-4 col-pb-sm">
							<h2>Latest Blog</h2>
							<div className="f-entry">
								<a href="#" className="featured-img" styles="background-image: url(images/img-1.jpg);"></a>
								<div className="desc">
									<span>February 15, 2018</span>
									<h3><a href="#">Art Gallery in Japan</a></h3>
								</div>
							</div>
							<div className="f-entry">
								<a href="#" className="featured-img" styles="background-image: url(images/img-2.jpg);"></a>
								<div className="desc">
									<span>February 9, 2018</span>
									<h3><a href="#">A Japanese Constellation</a></h3>
								</div>
							</div>
							<div className="f-entry">
								<a href="#" className="featured-img" styles="background-image: url(images/img-3.jpg);"></a>
								<div className="desc">
									<span>February 15, 2018</span>
									<h3><a href="#">Road Trip</a></h3>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-pb-sm">
							<h2>Newsletter</h2>
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
							<div className="subscribe text-center">
								<div className="form-group">
									<input type="text" className="form-control text-center" placeholder="Enter Email address" />
									<input type="submit" value="Subscribe" className="btn btn-primary btn-custom" />
								</div>
							</div>
						</div> */}

					</div>
				</div>
			</div>
		</footer>
        );
    }
}

export default Footer;