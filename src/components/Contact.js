import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us. We will get back to you soon!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''  
        });
    };

    return (
        <div className="page contact-page">
            <section className="page-header">
                <div className="container">
                   <h1>Contact Us</h1>
                   <p>Get in touch with our team</p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                   <div className="contact-wrapper">
                      <div className="contact-info-box">
                         <h2>Let's Connect</h2>
                         <p>We're here to help and answer any questions you might have.
                         We look forward to hearing from you.</p>

                         <div className="info-item">
                            <h3>Visit Us</h3>
                            <p>123, Business Avenue, Suite 100<br />New York, NY 10001</p>
                         </div>

                         
                      </div>
                   </div>
                </div>
            </section>
        </div>
    )


}