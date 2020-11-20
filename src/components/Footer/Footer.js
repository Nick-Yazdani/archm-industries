import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="container">
                <div className="row" style={{ alignItems: "normal" }}>
                    <div className="col brand-column">
                        <div className="brand-text-container">
                            <p className="h3">ARCHM Industries</p>
                        </div>
                        <div>
                            <p>Mon - Fri 9:00 - 17:00</p>
                            <p id="copyright">&copy; Copyright 2020 ARCHM Industries</p>
                        </div>
                    </div>
                    <div className="col item-column">
                        <p className="h5 subtitle">About Us</p>
                        <div>
                            <ul className="footer-list">
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Our Services</Link></li>
                                <li><Link to="#">Careers</Link></li>
                                <li><Link to="#">Core Values</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col item-column">
                        <p className="h5 subtitle">Services</p>
                        <div>
                            <ul className="footer-list">
                                <li><Link to="#">Terms of Use</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Environmental Policy</Link></li>
                                <li><Link to="#">Get In Touch</Link></li>
                                <li><Link to="#">Confidentiality</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col contact-column">
                        <div className="brand-text-container">
                            <p className="h5">Contact Us</p>
                        </div>
                        <div>
                            <p>(03) 9898 8585</p>
                            <p>28 Jersey Rd, Bayswater, VIC, 3153</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </footer>
    )
}

export default Footer;

