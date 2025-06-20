"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#141A16] dark:bg-[#040E2A] py-1 text-white">
      <nav className="myContainer mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        {/* <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={152}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </a> */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={152}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center space-x-6">
          {/* <li>
            <a className="hover:text-gray-400" href="/">
              Home
            </a>
          </li> */}
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#OurServices">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#Solutions">
              Solution
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#GreatProducts">
              Technology
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#WhyScaleStartups">
              Company
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-center space-y-4 pb-4 lg:hidden bg-[#141A16] dark:bg-[#040E2A]">
          {/* <li>
            <a className="hover:text-gray-400" href="/">
              Home
            </a>
          </li> */}

          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#OurServices">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#Solutions">
              Solution
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#GreatProducts">
              Technology
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#WhyScaleStartups">
              Company
            </a>
          </li>
          <li>
            <a className="hover:text-gray-400" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
