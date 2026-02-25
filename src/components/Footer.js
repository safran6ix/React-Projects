import React from "react";
import { Link } from 'react-router-dom';
import { EnvelopIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <footer className="footer">
           <div className="container">
            <div className="footer-content">
                    <h3>Portfolio.</h3>
                    <p>The portfolio about me.</p>

               <div className="footer-section">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
               </div>
               <div className="footer-section">
                  <h4>Contact Info</h4>
                  <ul className="contact-info">
                    <li><EnvelopIcon /> Info@portfolio</li>
                    <li><PhoneIcon /> +1 (94) 123456789</li>
                    <li><MapPinIcon /> New York, New 567 </li>
                  </ul>
               </div>
            </div>
               <div className="footer-bottom">
                    <p>&copy; 2026 Portfolio. All right reserved.</p>
                </div>
           </div>
        </footer>
    );
};

export default Footer;