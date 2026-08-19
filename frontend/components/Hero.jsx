import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LineWaves from "./LineWaves";

const TRUST_POINTS = [
  "Response within 15 minutes",
  "99.98% average uptime",
  "80+ businesses supported",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] max-h-[860px] min-h-[600px] w-full items-center overflow-hidden bg-white pt-16"
    >
      <style>{`
        @keyframes ejk-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ejk-fade-up { animation: ejk-fade-up 0.7s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .ejk-fade-up { animation: none !important; }
        }
      `}</style>

      {/* ~10% blue accent, concentrated top-right — the one saturated area against
          the otherwise white section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 42% 40% at 90% 8%, rgba(59,130,246,0.28) 0%, transparent 72%)",
        }}
      />

      {/* WebGL background — react-bits LineWaves, kept entirely in the blue family
          so the moving lines read clearly against the white base instead of
          disappearing into it. */}
      <div className="absolute inset-0">
        <LineWaves
          speed={0.28}
          innerLineCount={28}
          outerLineCount={34}
          warpIntensity={1.1}
          rotation={-30}
          edgeFadeWidth={0.05}
          colorCycleSpeed={0.6}
          brightness={0.55}
          color1="#93C5FD"
          color2="#3B82F6"
          color3="#6366F1"
          enableMouseInteraction={true}
          mouseInfluence={1.6}
        />
      </div>

      {/* Lightening layer for legibility: strongest behind the text column (left
          side and top/bottom edges), so the wave pattern stays visible further
          from the copy without ever competing with it. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <p className="ejk-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-600">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          Eejak Technologies Pvt. Ltd.
        </p>

        <h1
          className="ejk-fade-up max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Technology solutions built for your business
        </h1>

        <p
          className="ejk-fade-up mt-6 max-w-2xl text-lg leading-8 text-gray-600"
          style={{ animationDelay: "160ms" }}
        >
          We provide reliable technology solutions that help businesses
          improve efficiency, strengthen security, and grow with confidence.
        </p>

        <div className="ejk-fade-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "240ms" }}>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
          >
            View Services
          </Link>
        </div>

        <div
          className="ejk-fade-up mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-gray-100 pt-6"
          style={{ animationDelay: "320ms" }}
        >
          {TRUST_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}