import React, { useState } from "react";
import axios from "axios";
import "../src/styles.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "Daniel",
    email: "tulsacity2@gmail.com",
    message: "Hello Sir",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:5173/send-email",
        formData
      );
      if (response.data.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      setError("Failed to send email. Please try again later.");
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      {isSubmitted ? (
        <h3>Thank you! Your message has been sent.</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
