"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-30 border border-black bg-[#FFF0EC] py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full justify-between noto-sans-400 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>(757) 474-5262</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="block sm:hidden">4913 Fitzhugh Avenue...</span>
              <span className="hidden sm:block">
                4913 Fitzhugh Avenue, Suite 102, Richmond, VA 23230
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm py-4 md:px-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Image
                src="/logo.webp"
                width={200}
                height={100}
                alt="Elli shumaker"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-8 text-lg">
              <Link
                href="#services"
                className="text-gray-700 hover:text-teal-600  transition-colors"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-teal-600  transition-colors"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-teal-600  transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-teal-600  transition-colors"
              >
                Rates & FAQs
              </Link>
              <Link
                href="#areas"
                className="text-gray-700 hover:text-teal-600  transition-colors"
              >
                Areas Served
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-teal-600  transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
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
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          id="menu-bar"
          className={`lg:hidden bg-white border-t border-gray-200 fixed top-0 right-0 w-3/4 h-screen z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-full  flex justify-end p-4">
            <svg
              onClick={() => setIsMenuOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="py-2 space-y-1">
            <Link
              href="#services"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
            >
              Rates & FAQs
            </Link>
            <Link
              href="#areas"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
            >
              Areas Served
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-teal-600"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}