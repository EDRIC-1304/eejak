"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/contact`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setMessage("Thank you! We've received your message and will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-4 text-sm text-gray-500">
            <Link
              href="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="font-medium text-gray-900">Contact Us</span>
          </nav>

          {/* Company Name */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Eejak Technologies Pvt. Ltd.
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Let's Talk About Your Technology Needs
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Have a project in mind, need technology guidance, or looking for
            reliable IT support? Get in touch with our team and let's discuss
            how we can help your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Get in Touch
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                We're Here to Help
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Reach out to us using the contact details below. Whether you
                have a question, a new project, or need ongoing technology
                support, our team would be happy to hear from you.
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Address
                  </h3>

                  <p className="mt-2 leading-7 text-gray-700">
                    305 Gera Imperium Grand Patto
                    <br />
                    Panjim, Goa, India
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Email
                  </h3>

                  <a
                    href="mailto:info@eejak.com"
                    className="mt-2 block text-gray-700 transition hover:text-blue-600"
                  >
                    info@eejak.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Phone
                  </h3>

                  <a
                    href="tel:+9108070004400"
                    className="mt-2 block text-gray-700 transition hover:text-blue-600"
                  >
                    +91 08070004400
                  </a>
                </div>

                {/* Google Maps */}
                <div className="pt-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Location
                  </h3>

                  <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30758.442465524935!2d73.79567869044415!3d15.494901080564397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc084e77d9501%3A0xcf2579638f5eb252!2sGera's%20Imperium%20Grand!5e0!3m2!1sen!2sin!4v1787052466490!5m2!1sen!2sin"
                      className="h-56 w-full border-0"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Contact Us
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Send Us a Message
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Tell us a little about your requirements and our team will get
                back to you as soon as possible.
              </p>

              {message && (
                <div className="mt-6 rounded-lg bg-green-50 p-4 text-sm text-green-800 border border-green-200">
                  {message}
                </div>
              )}

              {error && (
                <div className="mt-6 rounded-lg bg-red-50 p-4 text-sm text-red-800 border border-red-200">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What Happens Next
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              A Simple Way to Get Started
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We keep the initial conversation simple. Tell us what you need,
              and we'll work with you to understand the requirement and identify
              the right way forward.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-7 ring-1 ring-gray-200">
              <span className="text-sm font-bold text-blue-600">01</span>

              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Tell Us What You Need
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Share your project, technology requirement, or support challenge
                with us.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-7 ring-1 ring-gray-200">
              <span className="text-sm font-bold text-blue-600">02</span>

              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Discuss Your Requirements
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We'll discuss your requirements and understand your goals,
                challenges, and expectations.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-7 ring-1 ring-gray-200">
              <span className="text-sm font-bold text-blue-600">03</span>

              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Find the Right Solution
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Together, we'll determine a practical technology approach suited
                to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Have a question or a technology requirement? Reach out to Eejak
            Technologies and let's start a conversation.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@eejak.com&su=Technology%20Enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100 hover:shadow-lg"
          >
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}
