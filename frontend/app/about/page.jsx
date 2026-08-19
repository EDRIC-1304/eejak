import Link from "next/link";

export default function About() {
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
              About Us
            </span>
          </nav>

          {/* Company Name */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Eejak Technologies Pvt. Ltd.
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Technology That Helps Businesses Move Forward
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Eejak Technologies Pvt. Ltd. provides practical and reliable
            technology solutions designed to help businesses improve
            efficiency, strengthen security, and manage their IT
            infrastructure with confidence.
          </p>

        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Your Technology Partner
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                We work with businesses to understand their technology
                requirements and provide solutions that are reliable,
                secure, and suited to their needs.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                From technology consulting and security to ongoing support
                and maintenance, our goal is to make technology easier to
                manage while helping organizations focus on their core
                business.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900">
                What We Believe
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Technology should be practical, dependable, and aligned
                with business goals. We focus on understanding problems
                first and then delivering solutions that provide real
                value.
              </p>

              <div className="mt-6 space-y-4">

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Reliability
                  </h4>

                  <p className="mt-1 text-gray-600">
                    Building dependable solutions businesses can rely on.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Security
                  </h4>

                  <p className="mt-1 text-gray-600">
                    Keeping systems and business information protected.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Continuous Improvement
                  </h4>

                  <p className="mt-1 text-gray-600">
                    Continuously improving technology to meet changing
                    business needs.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Built Around Your Business
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We focus on delivering technology that is useful today,
              adaptable for tomorrow, and aligned with the way your
              business operates.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {/* Mission */}
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                To provide reliable technology solutions that solve
                business challenges, improve efficiency, and create
                lasting value.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                To become a trusted technology partner for businesses by
                delivering innovative, secure, and scalable solutions.
              </p>
            </div>

            {/* Values */}
            <div className="rounded-xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Values
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Integrity, reliability, innovation, transparency, and
                continuous improvement guide everything we do.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let's Build Something Better
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Have a technology requirement or looking for reliable IT
            support? Let's discuss how we can help your business.
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