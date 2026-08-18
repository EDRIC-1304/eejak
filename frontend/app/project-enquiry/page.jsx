"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../contact/contact.css";

export default function ProjectEnquiryPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/project-enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            projectType: formData.projectType,
            description: formData.description,
            budget: Number(formData.budget),
            timeline: formData.timeline,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to submit project enquiry"
        );
      }

      setMessage(
        "Project enquiry submitted successfully."
      );

      setFormData({
        projectType: "",
        description: "",
        budget: "",
        timeline: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <h1>Project Enquiry</h1>

        <p className="contact-subtitle">
          Tell us about your project.
        </p>

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectType">
              Project Type
            </label>

            <input
              id="projectType"
              name="projectType"
              type="text"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="e.g. Website Development"
              required
            />
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
              placeholder="Describe your project"
              rows={6}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">
              Budget
            </label>

            <input
              id="budget"
              name="budget"
              type="number"
              min="0"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Enter your budget"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeline">
              Timeline
            </label>

            <input
              id="timeline"
              name="timeline"
              type="text"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="e.g. 3 months"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </main>
  );
}