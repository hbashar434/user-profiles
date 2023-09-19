import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/wesoftin.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Our App Logo" className="h-6 md:h-8" />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/" className="text-white hover:text-gray-300">
              User Profiles
            </Link>
            <Link to="/" className="text-white hover:text-gray-300">
              About Us
            </Link>
            <Link to="/" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-b-2 border-blue-200">
            <Link to="/" className="block p-2 text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/" className="block p-2 text-white hover:text-gray-300">
              User Profiles
            </Link>
            <Link to="/" className="block p-2 text-white hover:text-gray-300">
              About Us
            </Link>
            <Link to="/" className="block p-2 text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
