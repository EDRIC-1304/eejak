"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/api";
import "./auth.css";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignupLink = (e) => {
    const returnTo = new URLSearchParams(window.location.search).get(
      "returnTo"
    );

    if (returnTo === "/contact" || returnTo === "/project-enquiry") {
      e.preventDefault();
      window.location.href = `/signup?returnTo=${encodeURIComponent(returnTo)}`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await auth.login(formData.email, formData.password);

      // Store JWT
      localStorage.setItem("token", response.data.token);

      // Store basic user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      const returnTo = new URLSearchParams(window.location.search).get(
        "returnTo"
      );
      const destination =
        returnTo === "/contact" || returnTo === "/project-enquiry"
          ? returnTo
          : "/";

      router.push(destination);
    } catch (error) {
      setError(error.response?.data?.message || error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>

        <p className="auth-subtitle">
          Login to your account
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

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
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <a
            href="/signup"
            onClick={handleSignupLink}
          >
            Sign Up
          </a>
        </p>

        <p className="auth-switch">
          <a href="/forgot-password">
            Forgot Password?
          </a>
        </p>
      </div>
    </main>
  );
}