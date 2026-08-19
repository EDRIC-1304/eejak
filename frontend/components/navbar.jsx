"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogIn, LogOut } from "lucide-react";

function AuthAction({ isLoggedIn, onLogout }) {
  const label = isLoggedIn ? "Logout" : "Login";
  const className = isLoggedIn
    ? "group cursor-pointer rounded-full bg-red-50 p-2 text-red-600 transition hover:bg-red-100 hover:text-red-700"
    : "group cursor-pointer rounded-full bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100 hover:text-blue-700";
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

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/eejak_technologies_logo.png"
            alt="EEJAK Logo"
            width={150}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <div className="flex items-center gap-6">
          <div className="flex flex-wrap items-center justify-end gap-3 text-sm md:gap-6 md:text-base">
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
          </div>

          <AuthAction isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        </div>
      </div>
    </nav>
  );
}