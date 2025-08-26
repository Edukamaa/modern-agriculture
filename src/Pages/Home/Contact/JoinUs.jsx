import React, { useState } from "react";
import "./JoinUs.css";

const JoinUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "4a9aaf02-a6d2-4b81-82f1-24bfc8b5f649"); // ✅ Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="joinus-container">
      <h2>Farmer Registration Form</h2>
      <p>
        Join Modern Agric and become part of Kenya’s growing smart farming
        community. Fill in the details below to register.
      </p>

      {!submitted ? (
        <form className="joinus-form" onSubmit={handleSubmit}>
          {/* Personal Info */}
          <h3>Personal Information</h3>
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="name" required placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label>National ID *</label>
            <input type="text" name="id" required placeholder="Enter your National ID" />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" required placeholder="+254 7xx xxx xxx" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="example@gmail.com" />
          </div>
          <div className="form-group">
            <label>County *</label>
            <select name="county" required>
              <option value="">-- Select County --</option>
              <option>Nairobi</option>
              <option>Kiambu</option>
              <option>Murang’a</option>
              <option>Nakuru</option>
              <option>Uasin Gishu</option>
              <option>Kisumu</option>
              <option>Mombasa</option>
              <option>Machakos</option>
              <option>Other</option>
            </select>
          </div>

          {/* Farming Info */}
          <h3>Farming Information</h3>
          <div className="form-group">
            <label>Type of Farming *</label>
            <select name="farmingType" required>
              <option value="">-- Select --</option>
              <option>Crop Farming</option>
              <option>Livestock</option>
              <option>Poultry</option>
              <option>Dairy</option>
              <option>Horticulture</option>
              <option>Mixed Farming</option>
            </select>
          </div>
          <div className="form-group">
            <label>Farm Size (Acres)</label>
            <input type="number" name="farmSize" placeholder="e.g. 5" />
          </div>
          <div className="form-group">
            <label>Primary Crops/Livestock *</label>
            <input type="text" name="produce" required placeholder="e.g. Maize, Dairy Cows" />
          </div>
          <div className="form-group">
            <label>Farming Experience (Years)</label>
            <input type="number" name="experience" placeholder="e.g. 3" />
          </div>

          {/* Support */}
          <h3>Support Needed</h3>
          <div className="form-group">
            <label>What support do you need? *</label>
            <select name="support" required>
              <option value="">-- Select --</option>
              <option>Access to Markets</option>
              <option>Training & Skills</option>
              <option>Modern Farming Inputs</option>
              <option>Financial Support</option>
              <option>Technology & Innovation</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Additional Message</label>
            <textarea name="message" placeholder="Tell us more..." rows="4"></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Register"}
          </button>
        </form>
      ) : (
        <div className="thank-you">
          <h3>✅ Thank you for registering!</h3>
          <p>
            Your details have been received. A Modern Agric representative will
            contact you shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default JoinUs;
