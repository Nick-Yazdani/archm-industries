import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './NavBar.css';

const NavBar = props => {
    console.log(props)
    return (
        <div id="sticky-wrapper-mh" className="sticky-wrapper">
            <header id="mh" className="site-header">
                <div className="container-fluid nav-ctr">
                    <div className="row">
                        <div className="site-branding col-md-4 col-sm-6 col-lg-2 col-9"><Link to="/">ARCHM Industries</Link></div>
                        <nav id="site-navigation" className="main-navigation col-md-6">
                            <div className="menu-menu-container">
                                <ul id="primary-menu" className="menu">
                                    <li id="menu-item-321" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-321 ${props.history.location.pathname === "/" ? 'active-link' : null}`}><Link to="/">Home</Link></li>
                                    <li id="menu-item-322" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-322 two ${props.history.location.pathname === "/about" ? 'active-link' : null}` }><Link to="/about">About Us</Link></li>
                                    <li id="menu-item-323" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-323 three"><Link to="#">Blog</Link></li>
                                    <li id="menu-item-324" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-324 four ${props.history.location.pathname === "/contact" ? 'active-link' : null}`}><Link to="/contact">Contact Us</Link></li>
                                    <hr />
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default withRouter(NavBar);