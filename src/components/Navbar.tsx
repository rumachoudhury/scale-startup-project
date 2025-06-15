"use client";
import Image from "next/image";
// import { useTheme } from "../app/hooks/useTheme";

const Navbar: React.FC = () => {
  // const { theme, toggleTheme } = useTheme(); //`theme` is defined here

  return (
    <header className="w-full bg-[#141A16] dark:bg-[#040E2A] py-1 text-white dark:text-white">
      <nav className="myContainer mx-auto flex items-center justify-between !p-2">
        <a href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={300}
            height={300}
            priority
            className="md:width-[152px] md:height-[40px] lg:width-[152px] lg:height-[40px]"
          />
        </a>
        <div className="flex items-center space-x-8">
          {/* Nav Links */}
          <ul
            // data-orientation="horizontal"
            className="flex flex-col items-center justify-center space-y-4 text-white lg:flex-row lg:space-y-0 lg:space-x-6  mr-50"
          >
            <li>
              <a className="hover:text-gray-400" href="/">
                Home
              </a>
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
        </div>

        {/* Toggle Button */}
        {/* <button
          onClick={toggleTheme}
          className="ml-4 h-9 w-9 rounded-md flex items-center justify-center transition"
        >
          {theme === "dark" ? (
            // Sun Icon for dark mode (click to go light)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            // Moon Icon for light mode (click to go dark)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
            </svg>
          )}
          <span className="sr-only">Toggle Theme</span>
        </button> */}
      </nav>
    </header>
  );
};

export default Navbar;
