"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projectEnquiry } from "@/lib/api";

export default function ProjectEnquiryPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    projectType: "",
    customRequest: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isDraftLoaded, setIsDraftLoaded] = useState(false);

  useEffect(() => {
    const savedDraft = sessionStorage.getItem("projectEnquiryDraft");

    if (savedDraft) {
      try {
        setFormData((prev) => ({ ...prev, ...JSON.parse(savedDraft) }));
      } catch {
        sessionStorage.removeItem("projectEnquiryDraft");
      }
    }

    setIsDraftLoaded(true);
  }, []);

  useEffect(() => {
    if (isDraftLoaded) {
      sessionStorage.setItem("projectEnquiryDraft", JSON.stringify(formData));
    }
  }, [formData, isDraftLoaded]);

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
        sessionStorage.setItem("projectEnquiryDraft", JSON.stringify(formData));
        router.push("/login?returnTo=/project-enquiry");
        return;
      }

      await projectEnquiry.createEnquiry({
        projectType: formData.projectType,
        customRequest:
          formData.projectType === "Custom Requirement"
            ? formData.customRequest.trim()
            : "",
        description: formData.description,
        budget: Number(formData.budget),
        timeline: formData.timeline,
      });

      setMessage("Project enquiry submitted successfully.");

      setFormData({
        projectType: "",
        customRequest: "",
        description: "",
        budget: "",
        timeline: "",
      });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to submit project enquiry"
      );
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

            <span className="font-medium text-gray-900">
              Project Enquiry
            </span>
          </nav>

          {/* Company Name */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Eejak Technologies Pvt. Ltd.
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Tell Us About Your Project
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Have a project idea or a business requirement? Share the details
            with us and our team will review your requirements and get back
            to you with the right approach.
          </p>

        </div>
      </section>

      {/* Enquiry Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-3">

            {/* Information */}
            <div className="lg:col-span-1">

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Project Enquiry
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Let's Build Something Together
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Give us some information about your project so we can better
                understand what you need and determine how we can help.
              </p>

              <div className="mt-8 space-y-6">

                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    01
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Tell Us Your Idea
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Describe what you want to build or the problem you want
                      to solve.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    02
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Share Your Requirements
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Provide your expected budget and preferred timeline.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    03
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      We'll Get Back to You
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Our team will review your enquiry and discuss the next
                      steps with you.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 lg:col-span-2">

              <h2 className="text-2xl font-semibold text-gray-900">
                Project Details
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Please provide the following information about your project.
              </p>

              {/* Success Message */}
              {message && (
                <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  {message}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Project Type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Software Development">
                      Software Development
                    </option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="Digital Solutions">Digital Solutions</option>
                    <option value="Support & Maintenance">
                      Support &amp; Maintenance
                    </option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Custom Requirement">
                      Custom Requirement
                    </option>
                  </select>

                  {formData.projectType === "Custom Requirement" && (
                    <input
                      id="customRequest"
                      name="customRequest"
                      type="text"
                      value={formData.customRequest}
                      onChange={handleChange}
                      placeholder="Describe your custom requirement"
                      required
                      className="mt-4 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  )}
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Project Description
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your project, requirements, features, or challenges..."
                    rows={6}
                    required
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Budget + Timeline */}
                <div className="grid gap-6 md:grid-cols-2">

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Estimated Budget
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
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <label
                      htmlFor="timeline"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Expected Timeline
                    </label>

                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="e.g. 3 months"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Project Enquiry"}
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Share your requirements with us and let's explore how Eejak
            Technologies can help bring your idea to life.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100 hover:shadow-lg"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}