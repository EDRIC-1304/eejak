"use client";
import "./contact.css";

import { useState } from "react";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    phone: "",
    company: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      // Temporary user ID.
      // Authentication person will replace this
      // with the logged-in user's ID.
      const userId = "REPLACE_WITH_LOGGED_IN_USER_ID";

      const response = await axios.put(
        "http://localhost:5000/api/contact",
        {
          userId,
          ...formData,
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">

      {/* Reserved Header/Navbar space */}
      <div className="header-placeholder"></div>

      <section className="contact-section">
        <div className="contact-container">

          <div className="contact-heading">
            <p className="eyebrow">GET IN TOUCH</p>

            <h1>Tell us about yourself</h1>

            <p>
              Complete your contact details before submitting
              a project enquiry.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">
                Company
              </label>

              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">
                Address
              </label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : "Save Contact Details"}
            </button>

            {message && (
              <p className="form-message">
                {message}
              </p>
            )}
          </form>

        </div>
      </section>

      {/* Reserved Footer space */}
      <div className="footer-placeholder"></div>

    </main>
  );
}