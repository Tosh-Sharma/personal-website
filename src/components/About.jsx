import React, { PureComponent } from 'react';

import Services from './Services';
import Footer from './Footer';
import AboutMeCore from './AboutMeCore';
// import Testimonials from './Testimonials';
import Header from './Header';
// import NavigationDrawer from './NavigationDrawer';

class About extends PureComponent {
  render() {
    return (
    <div id="colorlib-page">
        {/* <NavigationDrawer /> */}
        <Header />
		    <AboutMeCore />
    		<Services />
        {/* <Testimonials /> */}
        <Footer/>
    </div>
    );
  }
}

export default About;