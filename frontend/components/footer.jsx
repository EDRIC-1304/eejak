import Link from "next/link";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t bg-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        {/* Company */}
        <div>
          <Link href="/">
            <h2 className="text-xl font-bold">EEJAK TECHNOLOGIES</h2>
          </Link>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            We build modern digital solutions that help businesses grow and
            succeed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/#about" className="hover:text-white">
              About
            </Link>

            <Link href="/#services" className="hover:text-white">
              Services
            </Link>

            <Link href="/#project-enquiry" className="hover:text-white">
              Project Enquiry
            </Link>

            <Link href="/#contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">Contact</h3>

          <div className="mt-4 space-y-2 text-sm text-gray-400 hover:hover:text-white">
            <a
              href="https://maps.app.goo.gl/oUt2JYMqcf3tq7aG7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block leading-7 text-gray-400 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            >
              305 Gera Imperium Grand Patto
              <br />
              Panjim, Goa, India
            </a>
            <a
              href="mailto:info@eejak.com"
              className="block text-gray-400 hover:hover:text-white"
            >
              info@eejak.com
            </a>

            <a
              href="tel:+9108070004400"
              className="block text-gray-400 hover:hover:text-white"
            >
              +91 08070004400
            </a>

            {/* Social Media */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/eejak-technologies/home/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]"
              >
                <FaLinkedinIn size={22} />
              </a>

              <a
                href="https://www.facebook.com/EejakTechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-500 transition-all duration-300 hover:scale-110 hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              >
                <FaFacebook size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 EEJAK. All rights reserved.
      </div>
    </footer>
  );
}
