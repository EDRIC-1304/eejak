import Link from "next/link";

export default function Home() {
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

            <span className="font-medium text-gray-900">Home</span>
          </nav>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Eejak Technologies Pvt. Ltd.
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Technology Solutions Built for Your Business
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We provide reliable technology solutions that help businesses
            improve efficiency, strengthen security, and grow with confidence.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Do
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Technology Services You Can Rely On
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              From technology consulting to security and ongoing support, we
              help businesses maintain reliable and effective IT systems.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* IT Consulting */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                IT Consulting
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Expert IT guidance helping businesses choose technologies, solve
                challenges, and grow.
              </p>
            </div>

            {/* Security */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                IT Security
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Protecting systems, data, and business operations with reliable
                security solutions.
              </p>
            </div>

            {/* Support */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Support & Maintenance
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Reliable support keeping systems secure, updated, and running
                smoothly.
              </p>
            </div>

            {/* Technology Solutions */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Technology Solutions
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Practical technology solutions designed to improve efficiency
                and support business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Need Reliable IT Support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Let's discuss your technology requirements and find the right
            solution for your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
