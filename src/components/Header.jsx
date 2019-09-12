import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
        <header>

<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="colorlib-navbar-brand">
                <a className="colorlib-logo" href="index.html"><span>TO</span><span>SH</span></a>
            </div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
        </div>
    </div>
</div>
</header>
    );
  }
}

export default Header;
