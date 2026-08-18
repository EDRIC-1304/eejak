import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive, and scalable websites designed to deliver seamless experiences across devices while supporting your business goals.",
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions built around your business requirements to streamline operations, improve productivity, and solve specific challenges.",
    },
    {
      title: "Mobile App Development",
      description:
        "User-friendly and reliable mobile applications designed to help businesses engage customers and deliver seamless digital experiences.",
    },
    {
      title: "UI/UX Design",
      description:
        "Clean, intuitive, and user-focused interfaces designed to make digital products easy to use, engaging, and visually effective.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable and reliable cloud solutions that help businesses improve performance, accessibility, flexibility, and operational efficiency.",
    },
    {
      title: "Digital Solutions",
      description:
        "Practical digital solutions that help businesses automate processes, improve workflows, reduce complexity, and support long-term growth.",
    },
    {
      title: "Support & Maintenance",
      description:
        "Reliable ongoing support and maintenance to keep your systems secure, updated, optimized, and running smoothly.",
    },
    {
      title: "IT Consulting",
      description:
        "Expert IT guidance helping businesses select the right technologies, solve technical challenges, improve infrastructure, and achieve their goals.",
    },
  ];

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
              Services
            </span>
          </nav>

          {/* Company Name */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Eejak Technologies Pvt. Ltd.
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Technology Services That Support Your Business
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We provide comprehensive technology services designed to help
            businesses build, improve, secure, and maintain their digital
            infrastructure. From development and design to cloud, consulting,
            and ongoing support, we deliver solutions built around your needs.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
            >
              Discuss Your Requirements
            </Link>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Offer
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Complete Technology Solutions
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our services cover the complete technology lifecycle, helping
              businesses turn ideas into digital products, improve existing
              systems, and maintain reliable technology environments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why Choose Us
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Technology Focused on Your Business
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We combine technical expertise with a clear understanding of
              business requirements to deliver solutions that are practical,
              reliable, and built for long-term value.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-gray-50 p-7 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Business Focused
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We understand your objectives first and recommend technology
                that supports your actual business requirements.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-7 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Reliable Solutions
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We focus on building dependable solutions that perform
                consistently and can adapt as your business grows.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-7 ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Ongoing Support
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Our relationship doesn't end after implementation. We can
                provide ongoing support and maintenance when you need it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Process
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              From Requirement to Reliable Solution
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We follow a straightforward approach to understand your
              requirements, develop the right solution, and provide support
              throughout the process.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-gray-200">
              <span className="text-sm font-bold text-blue-600">
                01
              </span>

              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Understand
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We learn about your business, requirements, challenges, and
                objectives.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-gray-200">
              <span className="text-sm font-bold text-blue-600">
                02
              </span>

              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Build & Implement
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We design and implement technology solutions suited to your
                requirements and environment.
              </p>
            </div>

            <div className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-gray-200">
              <span className="text-sm font-bold text-blue-600">
                03
              </span>

              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                Support & Improve
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We help maintain, improve, and support your technology as your
                business continues to evolve.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Have a Technology Requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Tell us what you are looking to build, improve, secure, or
            maintain, and let's find the right solution for your business.
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