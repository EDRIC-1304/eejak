"use client";

import { useState } from "react";
import { auth } from "@/lib/api";
import "../login/auth.css";

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword.length < 6) {
      setError("New password must be at least 6 characters long.");
      return;
    }

    if (formData.newPassword !== formData.confirmNewPassword) {
      setError("New passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await auth.forgotPassword(
        formData.email,
        formData.newPassword
      );

      setMessage(response.data.message);
      setFormData({
        email: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Reset Password</h1>

        <p className="auth-subtitle">
          Enter your email and choose a new password.
        </p>

        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter a new password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              id="confirmNewPassword"
              name="confirmNewPassword"
              type="password"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              placeholder="Confirm your new password"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <p className="auth-switch">
          <a href="/login">Back to Login</a>
        </p>
      </div>
    </main>
  );
}
