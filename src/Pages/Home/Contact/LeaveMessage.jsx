// File: src/Pages/Home/Contact/LeaveMessage.jsx
import React, { useState } from "react";
import "./LeaveMessage.css";
import { BsChatLeftDots } from "react-icons/bs";
import { FiPhone, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";

const LeaveMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify({
        access_key: "4a9aaf02-a6d2-4b81-82f1-24bfc8b5f649",
        ...formData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("❌ Failed to send. Try again.");
    }
  };

  return (
    <div className="leave-message">
      <div className="contact-left">
        <h3>
          Send Us a Message <BsChatLeftDots className="contact-icon" />
        </h3>
        <p>
          Do you have questions about farming, agribusiness, or our services? <br />
          Get in touch — <strong>Modern Agric</strong> is here to support your journey 
          toward smarter and sustainable farming.
        </p>
        <ul>
          <li><FiPhone className="icon" /> +254 722 785 480 / +254 757 775 835</li>
          <li><FiMail className="icon" /> info@modernagric.co.ke</li>
          <li><FiGlobe className="icon" /> www.modernagric.co.ke</li>
          <li><FiMapPin className="icon" /> Nairobi, Kenya</li>
        </ul>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default LeaveMessage;
