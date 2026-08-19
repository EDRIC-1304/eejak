"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogIn, LogOut, Menu, X } from "lucide-react";

function AuthAction({ isLoggedIn, onLogout, scrolled }) {
  const label = isLoggedIn ? "Logout" : "Login";

  const scrolledClass = isLoggedIn
    ? "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700"
    : "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700";
  const transparentClass = isLoggedIn
    ? "bg-white/10 text-red-200 hover:bg-white/20 hover:text-red-100"
    : "bg-white/10 text-blue-100 hover:bg-white/20 hover:text-white";

  const className = `group inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition ${
    scrolled ? scrolledClass : transparentClass
  }`;
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
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("token")));
  }, [pathname]);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = Array.from(document.querySelectorAll("section[id]"));
      const sectionBeforeViewport = sections.filter(
        (section) => section.getBoundingClientRect().top <= 100
      );
      const currentSection = sectionBeforeViewport.at(-1) || sections[0];

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const updateFromHash = () => {
      const section = window.location.hash.replace("#", "");

      if (section) {
        setActiveSection(section);
      } else {
        updateActiveSection();
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [pathname]);

  // Toggles the navbar from a transparent "glass" state — which lets it blend
  // into the hero's dark wave background — to a solid state once the page has
  // scrolled past the hero, where a light section needs a readable opaque bar.
  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 40);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkClass = scrolled
    ? "font-medium underline decoration-transparent decoration-2 underline-offset-8 transition hover:text-blue-600 hover:decoration-blue-600 focus-visible:text-blue-600 focus-visible:decoration-blue-600"
    : "font-medium underline decoration-transparent decoration-2 underline-offset-8 transition hover:text-white hover:decoration-cyan-300 focus-visible:text-white focus-visible:decoration-cyan-300";
  const mobileNavLinkClass = scrolled
    ? "rounded-lg px-3 py-3 font-medium underline decoration-transparent decoration-2 underline-offset-4 transition hover:bg-blue-50 hover:text-blue-600 hover:decoration-blue-600 focus-visible:text-blue-600 focus-visible:decoration-blue-600"
    : "rounded-lg px-3 py-3 font-medium underline decoration-transparent decoration-2 underline-offset-4 transition hover:bg-white/10 hover:text-white hover:decoration-cyan-300 focus-visible:text-white focus-visible:decoration-cyan-300";

  const getNavLinkClass = (section, mobile = false) => {
    const baseClass = mobile ? mobileNavLinkClass : navLinkClass;

    if (activeSection === section) {
      return scrolled
        ? `${baseClass} !text-blue-600 !decoration-blue-600`
        : `${baseClass} !text-cyan-300 !decoration-cyan-300`;
    }

    return scrolled
      ? `${baseClass} !text-gray-900 !decoration-transparent`
      : `${baseClass} !text-blue-100 !decoration-transparent`;
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">

        {/* Logo — note: if this mark is dark-colored, it will be low-contrast in the
            transparent state; a light/white logo variant swapped in on !scrolled
            would match the rest of this treatment. */}
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
          <Link href="/#home" className={getNavLinkClass("home")}>
              Home
          </Link>
          <Link href="/#about" className={getNavLinkClass("about")}>
              About Us
          </Link>
          <Link href="/#services" className={getNavLinkClass("services")}>
              Services
          </Link>
          <Link href="/#project-enquiry" className={getNavLinkClass("project-enquiry")}>
              Project Enquiry
          </Link>
          <Link href="/#contact" className={getNavLinkClass("contact")}>
              Contact
          </Link>

          <AuthAction isLoggedIn={isLoggedIn} onLogout={handleLogout} scrolled={scrolled} />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className={`relative z-10 flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-lg p-2 transition md:hidden ${
            scrolled
              ? "text-gray-700 hover:bg-gray-100 hover:text-black"
              : "text-white hover:bg-white/10"
          }`}
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
        <div
          className={`md:hidden ${
            scrolled
              ? "border-t border-gray-200 bg-white shadow-md"
              : "border-t border-white/10 bg-[#04081C]/95 backdrop-blur-md"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            <Link href="/#home" onClick={closeMenu} className={getNavLinkClass("home", true)}>
              Home
            </Link>
            <Link href="/#about" onClick={closeMenu} className={getNavLinkClass("about", true)}>
              About Us
            </Link>
            <Link href="/#services" onClick={closeMenu} className={getNavLinkClass("services", true)}>
              Services
            </Link>
            <Link href="/#project-enquiry" onClick={closeMenu} className={getNavLinkClass("project-enquiry", true)}>
              Project Enquiry
            </Link>
            <Link href="/#contact" onClick={closeMenu} className={getNavLinkClass("contact", true)}>
              Contact
            </Link>
            <div className={`mt-2 border-t pt-3 ${scrolled ? "border-gray-200" : "border-white/10"}`}>
              <AuthAction
                isLoggedIn={isLoggedIn}
                onLogout={() => {
                  handleLogout();
                  closeMenu();
                }}
                scrolled={scrolled}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
