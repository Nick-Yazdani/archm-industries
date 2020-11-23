import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './NavBar.css';

const NavBar = props => {
    return (
        <div id="sticky-wrapper-mh" className="sticky-wrapper">
            <header id="mh" className="site-header">
                <div className="container-fluid nav-ctr">
                    <div className="row w-100">
                        <div id="site-branding" className="site-branding col-2"><Link to="/">ARCHM Industries</Link></div>
                        <nav id="site-navigation" className="main-navigation col">
                            <div className="menu-menu-container">
                                <ul id="primary-menu" className="menu">
                                    <li id="menu-item-321" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-321 ${props.history.location.pathname === "/" ? 'active-link' : null}`}><Link className="menu-link" to="/">Home</Link></li>
                                    <li id="menu-item-322" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-322 two ${props.history.location.pathname === "/about" ? 'active-link' : null}`}><Link className="menu-link" to="/about">About Us</Link></li>
                                    <li id="menu-item-323" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-323 three"><Link className="menu-link" to="#">Blog</Link></li>
                                    <li id="menu-item-324" className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-324 four ${props.history.location.pathname === "/contact" ? 'active-link' : null}`}><Link className="menu-link" to="/contact">Contact Us</Link></li>
                                    <hr />
                                </ul>
                            </div>
                        </nav>
                        <div className="col-1 hamburger-column">
                            <div id="menuToggle">
                                <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="secondary-menu" className="secondary-menu">
                                    <li className={`${props.history.location.pathname === "/" ? 'active-link' : null}`}><Link to="/">Home</Link></li>
                                    <li className={`${props.history.location.pathname === "/about" ? 'active-link' : null}`}><Link to="/about">About Us</Link></li>
                                    <li className={`${props.history.location.pathname === "/blog" ? 'active-link' : null}`} ><Link to="#">Blog</Link></li>
                                    <li className={`${props.history.location.pathname === "/contact" ? 'active-link' : null}`}><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default withRouter(NavBar);