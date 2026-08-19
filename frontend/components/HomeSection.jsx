import Link from "next/link";
import {
  Settings2,
  ShieldCheck,
  LifeBuoy,
  Layers3,
  ArrowRight,
  Quote,
} from "lucide-react";
import Hero from "./Hero";

const SERVICES = [
  {
    icon: Settings2,
    accent: "text-blue-600 bg-blue-50",
    title: "IT Consulting",
    description:
      "Expert IT guidance helping businesses choose technologies, solve challenges, and grow.",
  },
  {
    icon: ShieldCheck,
    accent: "text-violet-600 bg-violet-50",
    title: "IT Security",
    description:
      "Protecting systems, data, and business operations with reliable security solutions.",
  },
  {
    icon: LifeBuoy,
    accent: "text-teal-600 bg-teal-50",
    title: "Support & Maintenance",
    description:
      "Reliable support keeping systems secure, updated, and running smoothly.",
  },
  {
    icon: Layers3,
    accent: "text-amber-600 bg-amber-50",
    title: "Technology Solutions",
    description:
      "Practical technology solutions designed to improve efficiency and support business growth.",
  },
];

const STATS = [
  { value: "12+", label: "Years in operation" },
  { value: "80+", label: "Businesses supported" },
  { value: "99.98%", label: "Average uptime" },
  { value: "24/7", label: "Monitoring & support" },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your current systems and talk to your team to understand what's actually slowing you down.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "You get a clear plan with scope, timeline, and cost before any work begins.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Our engineers implement the solution with regular check-ins along the way.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "We stay on after launch to monitor, maintain, and fix things before they become your problem.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Our systems went from a constant source of stress to something we don't think about anymore. That's exactly what we needed.",
    name: "Operations Director",
    context: "Retail client, 3 years",
  },
  {
    quote:
      "They caught a security gap our previous provider missed for two years. The audit alone paid for itself.",
    name: "Finance Manager",
    context: "Manufacturing client, 2 years",
  },
  {
    quote:
      "Response time is the real difference. We've never waited more than a few minutes for someone to pick up an issue.",
    name: "IT Lead",
    context: "Healthcare client, 4 years",
  },
];

const TECH = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Microsoft 365",
  "Cisco Networking",
  "VMware",
  "Linux",
  "Zero Trust Security",
];

const FAQS = [
  {
    question: "How quickly can you respond to an issue?",
    answer:
      "Our average first response time is under 15 minutes for critical issues, with 24/7 monitoring across all managed environments.",
  },
  {
    question: "Do you work with businesses that already have an internal IT team?",
    answer:
      "Yes — we regularly work alongside internal teams, either as an extension for overflow and specialized work, or as a dedicated partner for specific systems like security or cloud infrastructure.",
  },
  {
    question: "What size businesses do you typically work with?",
    answer:
      "Most of our clients are small to mid-sized businesses, though we also support specific departments within larger organizations.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We scope every engagement individually based on your systems and goals, and share a clear cost breakdown before any work begins — no open-ended hourly billing.",
  },
];

export default function HomeSection() {
  return (
    <>
      {/* Shared keyframes for the CTA blob and the tech marquee.
          Plain <style> (not styled-jsx) so this stays a server component. */}
      <style>{`
        @keyframes ejk-drift-a {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(40px, 30px) scale(1.08); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes ejk-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ejk-blob-a { animation: ejk-drift-a 16s ease-in-out infinite; }
        .ejk-marquee-track { animation: ejk-marquee 28s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ejk-blob-a, .ejk-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      {/* Hero — cursor-reactive circuit background, contained to one laptop-screen-sized section */}
      <Hero />

      {/* Stats */}
      <section className="border-y border-blue-100 bg-gradient-to-b from-blue-50/70 to-white px-6 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Do
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Technology services you can rely on
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              From technology consulting to security and ongoing support, we
              help businesses maintain reliable and effective IT systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, accent, title, description }) => (
              <div
                key={title}
                className="group rounded-xl bg-white p-6 ring-1 ring-gray-200 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-gray-300"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${accent}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-blue-50/40 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            How We Work
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            A process built to remove surprises
          </h2>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-5 hidden h-px bg-gray-200 lg:block"
            />
            <div className="grid gap-10 lg:grid-cols-4">
              {PROCESS.map((item) => (
                <div key={item.step} className="relative">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            What Clients Say
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Trusted by businesses that can&apos;t afford downtime
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-xl bg-white p-6 ring-1 ring-gray-200">
                <Quote className="h-6 w-6 text-blue-200" />
                <blockquote className="mt-4 flex-1 text-sm leading-6 text-gray-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Tech we work with — scrolling marquee, text-only (no third-party logos/trademarks) */}
      <section className="overflow-hidden border-y border-gray-100 bg-white py-10">
        <p className="mx-auto mb-6 max-w-6xl px-6 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
          Technologies we work with
        </p>
        <div className="relative">
          <div className="ejk-marquee-track flex w-max gap-12">
            {[...TECH, ...TECH].map((name, i) => (
              <span key={`${name}-${i}`} className="whitespace-nowrap text-lg font-semibold text-gray-300">
                {name}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      {/* FAQ — native details/summary, no client-side JS needed */}
      <section className="bg-gray-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-blue-600">FAQ</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Common questions
          </h2>

          <div className="mt-10 divide-y divide-gray-200 rounded-xl bg-white ring-1 ring-gray-200">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-gray-900">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-blue-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-20">
        <div
          aria-hidden="true"
          className="ejk-blob-a pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Need reliable IT support?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Let&apos;s discuss your technology requirements and find the right solution for your business.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+910000000000"
              className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
