import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            odio in arcu tristique venenatis.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-500 hover:text-blue-400"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-400 hover:text-blue-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-pink-600 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="text-gray-400">
            <li className="mb-2">
              <a href="/" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/profiles"
                className="hover:text-white transition duration-300"
              >
                User Profiles
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
          <address className="text-gray-400">
            <p>Email: contact@wesoftin.com</p>
            <p>Phone: +880 1656789017</p>
            <p>Address: 123 Street, Dhaka, Bangladesh</p>
          </address>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-gray-400 lg:text-center">
          &copy; {new Date().getFullYear()} Wesoftin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
