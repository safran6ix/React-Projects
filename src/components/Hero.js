import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
             <div className="container hero-content">
                 <h1>This is my PORTFOLIO.</h1>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex enim doloribus repellendus, eveniet animi porro rerum odit accusamus quae.</p>
                 <div className="hero-buttons">
                    <Link to="/contact" className="btn">Get Hire</Link>
                    <Link to="/services" className="btn btn-secondary">Contact</Link>
                 </div>
             </div>
        </section>
    );
};

export default Hero;