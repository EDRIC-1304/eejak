"use client";

import { useState } from "react";
import axios from "axios";

export default function ProjectEnquiryPage() {
  const [contactCompleted, setContactCompleted] = useState(false);

  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
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

    if (!contactCompleted) {
      setMessage(
        "Please complete your contact details first."
      );
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const userId = "REPLACE_WITH_LOGGED_IN_USER_ID";

      const response = await axios.post(
        "http://localhost:5000/api/project-enquiries",
        {
          userId,
          ...formData,
        }
      );

      setMessage(response.data.message);

      setFormData({
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });
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
    <main className="enquiry-page">

      {/* Reserved Header/Navbar space */}
      <div className="header-placeholder"></div>

      <section className="enquiry-section">
        <div className="enquiry-container">

          <div className="enquiry-heading">
            <p className="eyebrow">
              PROJECT ENQUIRY
            </p>

            <h1>
              Let's discuss your project.
            </h1>

            <p>
              Tell us what you want to build and
              we'll get back to you.
            </p>
          </div>

          {!contactCompleted && (
            <div className="contact-warning">
              <p>
                You need to complete your contact
                details before submitting a project
                enquiry.
              </p>

              <a href="/contact">
                Complete Contact Details →
              </a>
            </div>
          )}

          <form
            className={`enquiry-form ${
              !contactCompleted
                ? "form-disabled"
                : ""
            }`}
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="projectType">
                Project Type
              </label>

              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                disabled={!contactCompleted}
                required
              >
                <option value="">
                  Select project type
                </option>

                <option value="Website">
                  Website
                </option>

                <option value="Web Application">
                  Web Application
                </option>

                <option value="Mobile Application">
                  Mobile Application
                </option>

                <option value="Software">
                  Software
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">
                Estimated Budget
              </label>

              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                disabled={!contactCompleted}
                required
              >
                <option value="">
                  Select budget
                </option>

                <option value="Below ₹50,000">
                  Below ₹50,000
                </option>

                <option value="₹50,000 - ₹1,00,000">
                  ₹50,000 - ₹1,00,000
                </option>

                <option value="₹1,00,000 - ₹3,00,000">
                  ₹1,00,000 - ₹3,00,000
                </option>

                <option value="₹3,00,000+">
                  ₹3,00,000+
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="timeline">
                Expected Timeline
              </label>

              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                disabled={!contactCompleted}
                required
              >
                <option value="">
                  Select timeline
                </option>

                <option value="Less than 1 month">
                  Less than 1 month
                </option>

                <option value="1 - 3 months">
                  1 - 3 months
                </option>

                <option value="3 - 6 months">
                  3 - 6 months
                </option>

                <option value="6+ months">
                  6+ months
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">
                Project Description
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={7}
                disabled={!contactCompleted}
                required
              />
            </div>

            <button
              type="submit"
              disabled={
                !contactCompleted || loading
              }
            >
              {loading
                ? "Submitting..."
                : "Submit Enquiry"}
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