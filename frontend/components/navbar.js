import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-white">
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

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>

          <Link href="/services" className="text-gray-700 hover:text-black">
            Services
          </Link>

          <Link
            href="/project-enquiry"
            className="text-gray-700 hover:text-black"
          >
            Project Enquiry
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}