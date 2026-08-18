import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive, and scalable websites built using the latest technologies.",
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions designed around your business requirements.",
    },
    {
      title: "Mobile App Development",
      description:
        "User-friendly mobile applications designed for modern businesses.",
    },
    {
      title: "UI/UX Design",
      description:
        "Clean and intuitive user interfaces that provide excellent user experiences.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud-based solutions to improve performance and reliability.",
    },
    {
      title: "Digital Solutions",
      description:
        "Technology solutions that help businesses automate processes and grow.",
    },
    {
      title: "Support & Maintenance",
      description:
        "Reliable support keeping systems secure, updated, and running smoothly.",
    },
    {
      title: "IT Consulting",
      description:
        "Expert IT guidance helping businesses choose technologies, solve challenges, and grow.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-10 text-sm text-gray-500">
          <Link href="/" className="font-medium text-blue-600 hover:underline">
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="font-medium text-gray-900">Services</span>
        </nav>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Our Services
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          We provide a range of technology services to help businesses build,
          improve, and scale their digital presence.
        </p>

        {/* Services */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {service.description}
              </p>

              <Link
                href="#"
                className="mt-5 inline-block font-medium text-blue-600 hover:text-blue-700"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
