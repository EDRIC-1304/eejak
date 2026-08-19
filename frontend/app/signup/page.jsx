"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/api";
import "../login/auth.css";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
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

  const handleLoginLink = (e) => {
    const returnTo = new URLSearchParams(window.location.search).get(
      "returnTo"
    );

    if (returnTo === "/#contact" || returnTo === "/#project-enquiry") {
      e.preventDefault();
      window.location.href = `/login?returnTo=${encodeURIComponent(returnTo)}`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await auth.signup(formData.name, formData.email, formData.password);

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      const returnTo = new URLSearchParams(window.location.search).get(
        "returnTo"
      );
      const destination =
        returnTo === "/#contact" || returnTo === "/#project-enquiry"
          ? returnTo
          : "/";

      router.push(destination);
    } catch (error) {
      setError(error.response?.data?.message || error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Create your account
        </p>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

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
              minLength={6}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Sign Up"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <a
            href="/login"
            onClick={handleLoginLink}
          >
            Login
          </a>
        </p>
      </div>
    </main>
  );
}