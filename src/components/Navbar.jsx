import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-midnight/80 backdrop-blur-sm border-b border-blue-900/50 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold text-white">
            <Link to="/">SDE</Link>
          </div>

          {/* Primary Nav (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative group text-neutral-300 hover:text-strong-purple transition-colors"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-strong-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/#featured-projects"
              className="relative group text-neutral-300 hover:text-strong-purple transition-colors"
            >
              <span>Proyectos</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-strong-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/#abt-us"
              className="relative group text-neutral-300 hover:text-strong-purple transition-colors"
            >
              <span>Nosotros</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-strong-purple group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Social Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/SergioEderCervantes"
              aria-label="GitHub"
              target="_blank"
              className="text-neutral-400 hover:text-strong-purple transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* <a
              href="#"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-strong-purple transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full left-0 top-16 bg-midnight/95 backdrop-blur-sm md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-5"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-neutral-300 hover:text-strong-purple block px-3 py-2 rounded-md text-base font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            to="/#featured-projects"
            className="text-neutral-300 hover:text-strong-purple block px-3 py-2 rounded-md text-base font-medium hover:underline underline-offset-4"
          >
            Proyectos
          </Link>
          <Link
            to="/#abt-us"
            className="text-neutral-300 hover:text-strong-purple block px-3 py-2 rounded-md text-base font-medium hover:underline underline-offset-4"
          >
            Nosotros
          </Link>
        </div>
        {/* Social Links in Mobile Menu */}
        <div className="px-5 py-3 flex justify-start space-x-4">
          <a
            href="#"
            aria-label="GitHub"
            className="text-neutral-400 hover:text-strong-purple transition-colors"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-strong-purple transition-colors"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
