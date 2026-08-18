import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-medium text-blue-600">
            Home
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Welcome to Eejak Tech
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We build modern digital solutions that help businesses grow,
            improve efficiency, and create better experiences for their
            customers.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/services"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Our Services
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}