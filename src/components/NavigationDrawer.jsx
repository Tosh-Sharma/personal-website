import React, { PureComponent } from 'react';

class NavigationDrawer extends PureComponent {
  render() {
    return (
        <nav id="colorlib-main-nav" role="navigation">
		<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
		<div class="js-fullheight colorlib-table">
			<div class="colorlib-table-cell js-fullheight">
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<input type="text" class="form-control" id="search" placeholder="Enter any key to search..."/>
							<button type="submit" class="btn btn-primary"><i class="icon-search3"></i></button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="services.html">Services</a></li>
							<li><a href="work.html">Work</a></li>
							<li><a href="blog.html">Blog</a></li>
							<li class="active"><a href="about.html">About</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<h2 class="head-title">Works</h2>
						<a href="images/work-1.jpg" class="gallery image-popup-link text-center" styles="background-image: url(images/work-1.jpg);">
							<span><i class="icon-search3"></i></span>
						</a>
						<a href="images/work-2.jpg" class="gallery image-popup-link text-center" styles="background-image: url(images/work-2.jpg);">
							<span><i class="icon-search3"></i></span>
						</a>
						<a href="images/work-3.jpg" class="gallery image-popup-link text-center" styles="background-image: url(images/work-3.jpg);">
							<span><i class="icon-search3"></i></span>
						</a>
						<a href="images/work-4.jpg" class="gallery image-popup-link text-center" styles="background-image: url(images/work-4.jpg);">
							<span><i class="icon-search3"></i></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
    );
  }
}

export default NavigationDrawer;
