"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/eejak_technologies_logo.png"
            alt="EEJAK Logo"
            width={150}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-gray-700 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-700 transition hover:text-black"
          >
            About Us
          </Link>

          <Link
            href="/services"
            className="text-gray-700 transition hover:text-black"
          >
            Services
          </Link>

          <Link
            href="/project-enquiry"
            className="text-gray-700 transition hover:text-black"
          >
            Project Enquiry
          </Link>

          <Link
            href="/contact"
            className="text-gray-700 transition hover:text-black"
          >
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 hover:text-black md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            /* X icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black"
            >
              About Us
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black"
            >
              Services
            </Link>

            <Link
              href="/project-enquiry"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black"
            >
              Project Enquiry
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}