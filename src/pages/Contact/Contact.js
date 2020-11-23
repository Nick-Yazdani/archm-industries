import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Contact.css';

const Contact = () => {
    return (
        <Layout>
            <div className="img-ovl">
                <div className="container contact-content">
                    <div id="change-my-height" className="row h-100">
                        
                        <div className="col-md-3 contact-deets">
                            <p className="h3 contact-heading">Contact</p>
                            <p>email@email.com</p>
                            <p>123456789</p>
                            <p>28 Jersey Rd, Bayswater VIC 3153</p>
                        </div>
                        <div className="col form-ctl">
                            <p className="h3 form-title">Send Us A Message.</p>
                            <form className="contact-form">
                                <div className="container">
                                    <div className="row input-ctl">
                                        <input type="text" name="name" id="name" placeholder="Name" />
                                        <input type="email" name="email" id="email" placeholder="Email" />
                                    </div>
                                    <div className="row input-ctl">
                                        <input type="text" name="phone" id="phone" placeholder="Phone" />
                                    </div>
                                    <div className="row input-ctl">
                                        <textarea name="message" id="message" style={{ resize: "none" }} placeholder="Your message here..." />
                                    </div>
                                    <div className="row btn-ctl">
                                        <button className="btn btn-dark" style={{ padding: "0.78rem", borderRadius: "20px" }}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;