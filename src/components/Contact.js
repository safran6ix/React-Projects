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

            <section>
                
            </section>
        </div>
    )


}