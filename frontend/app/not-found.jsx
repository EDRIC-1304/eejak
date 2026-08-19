import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-700">
          Error 404
        </p>

        <h1 className="mt-4 text-7xl font-bold tracking-tight text-black">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-950">
          Page not found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-gray-700">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}