import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <nav className="mb-10 text-sm text-gray-500">
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

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          About Us
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Welcome to Eejak Tech. We are dedicated to building simple,
          reliable, and modern digital solutions for businesses and
          organizations.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Our mission is to create useful technology solutions that
              solve real-world problems and make businesses more efficient.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Our Vision
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              We aim to create innovative, scalable, and user-friendly
              digital experiences.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Our Values
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Quality, innovation, transparency, reliability, and
              continuous improvement are at the heart of what we do.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}