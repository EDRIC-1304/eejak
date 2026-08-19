"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogIn, LogOut, Menu, X } from "lucide-react";

function AuthAction({ isLoggedIn, onLogout }) {
  const label = isLoggedIn ? "Logout" : "Login";
  const className = isLoggedIn
    ? "group inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100 hover:text-red-700"
    : "group inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-50 text-blue-600 transition hover:bg-blue-100 hover:text-blue-700";
  const iconClassName = `h-5 w-5 transition-transform duration-300 ${
    isLoggedIn
      ? "group-hover:-translate-x-0.5"
      : "group-hover:translate-x-0.5"
  }`;
  const icon = isLoggedIn ? (
    <LogOut className={iconClassName} aria-hidden="true" />
  ) : (
    <LogIn className={iconClassName} aria-hidden="true" />
  );

  if (isLoggedIn) {
    return (
      <button
        type="button"
        onClick={onLogout}
        className={className}
        aria-label={label}
        title={label}
      >
        {icon}
      </button>
    );
  }

  return (
    <Link
      href="/login"
      className={className}
      aria-label={label}
      title={label}
    >
      {icon}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("token")));
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/eejak_technologies_logo.png"
            alt="EEJAK Logo"
            width={150}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-gray-700 transition hover:text-black">
              Home
          </Link>
          <Link href="/about" className="text-gray-700 transition hover:text-black">
              About Us
          </Link>
          <Link href="/services" className="text-gray-700 transition hover:text-black">
              Services
          </Link>
          <Link href="/project-enquiry" className="text-gray-700 transition hover:text-black">
              Project Enquiry
          </Link>
          <Link href="/contact" className="text-gray-700 transition hover:text-black">
              Contact
          </Link>

          <AuthAction isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="relative z-10 flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 hover:text-black md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white shadow-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            <Link href="/" onClick={closeMenu} className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black">
              Home
            </Link>
            <Link href="/about" onClick={closeMenu} className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black">
              About Us
            </Link>
            <Link href="/services" onClick={closeMenu} className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black">
              Services
            </Link>
            <Link href="/project-enquiry" onClick={closeMenu} className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black">
              Project Enquiry
            </Link>
            <Link href="/contact" onClick={closeMenu} className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-gray-50 hover:text-black">
              Contact
            </Link>
            <div className="mt-2 border-t border-gray-200 pt-3">
              <AuthAction
                isLoggedIn={isLoggedIn}
                onLogout={() => {
                  handleLogout();
                  closeMenu();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}