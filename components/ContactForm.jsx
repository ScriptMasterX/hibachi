import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactForm = () => {
    // Manage form inputs with useState
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        // Use emailjs to send the form data
        emailjs.send('service_4c5fuyp', 'template_0yn2bq4', templateParams, 'n01DShPYNCerX1NkE')
            .then((response) => {
                alert('Message sent successfully!');
                // Clear the form fields
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                alert('Failed to send message. Please try again.');
                console.error('Error:', error);
            });
    };

    return (
        <section id="contact">
            <h1 className="section-header">Contact</h1>

            <div className="contact-wrapper">
                <form id="contact-form" className="form-horizontal" role="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="NAME"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="EMAIL"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <textarea
                        className="form-control form-textarea"
                        rows="10"
                        name="message"
                        placeholder="MESSAGE"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button className="btn btn-primary send-button" id="submit" type="submit">
                        <div className="alt-send-button">
                            <i className="fa fa-paper-plane"></i>
                            <span className="send-text">SEND</span>
                        </div>
                    </button>
                </form>

                <div className="direct-contact-container">
                    <ul className="contact-list">
                        <li className="list-item">
                            <i className="fa fa-map-marker fa-2x">
                                <span className="contact-text place">Phoenix, Arizona</span>
                            </i>
                        </li>
                        <li className="list-item">
                            <i className="fa fa-phone fa-2x">
                                <span className="contact-text phone">
                                    <a href="tel:1-212-555-5555" title="Give me a call">
                                        (212) 555-2368
                                    </a>
                                </span>
                            </i>
                        </li>
                        <li className="list-item">
                            <i className="fa fa-envelope fa-2x">
                                <span className="contact-text gmail">
                                    <a href="mailto:samplemail@gmail.com" className="contactMail" title="Send me an email">
                                        samplemail@gmail.com
                                    </a>
                                </span>
                            </i>
                        </li>
                    </ul>
                    <hr className="contactHR" />
                    <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
