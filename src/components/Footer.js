import React from 'react';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter
                </p>
                <p className="footer-subscription-text">
                    Unsubscribe   
                </p>
                <div className="input-areas">
                    <form action="/Publications" method="POST">
                        <input type="email" name="email" placeholder="your email" className="footer-input" />
                        <Button buttonstyle="btn--outline" to="/Publications">Subscribe</Button>
                    </form>
                </div> 
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/ContactMe">Bio</Link>
                        <Link to="/ContactMe">Services</Link>
                        <Link to="/ContactMe">Publications</Link>
                    </div>         
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to="/ContactMe">Contact Me</Link>
                        <Link to="/ContactMe">Testimonials</Link>
                        <Link to="/ContactMe">Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/ContactMe">Facebook</Link>
                        <Link to="/ContactMe">LinkedIn</Link>
                        <Link to="/ContactMe">Publications</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo" to="/">Honar <i className="fa-solid fa-stethoscope" /></Link>
                    </div>
                    <small className="website-rights">Honar © 2022</small>
                    <div className="social-icons">
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link" to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
