"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaSearch, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { currentUser } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you would implement dark mode functionality here
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Aptitude", href: "/aptitude" },
    { title: "Interview Questions", href: "/interview-questions" },
    { title: "Coding Practice", href: "/coding-practice" },
    { title: "Mock Tests", href: "/mock-tests" },
    { title: "Resources", href: "/resources" },
    { title: "Blog", href: "/blog" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/mindsprint-logo.svg" 
                alt="MindSprint Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                MindSprint
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            
            {currentUser ? (
              <Link
                href="/profile"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                  {currentUser.email?.charAt(0).toUpperCase() || 'U'}
                </div>
                <span className="hidden sm:inline">{currentUser.displayName || currentUser.email?.split('@')[0] || 'User'}</span>
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <FaUser />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute right-6 top-5 text-gray-400" />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.title}
              </Link>
            ))}
            {currentUser ? (
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                  {currentUser.email?.charAt(0).toUpperCase() || 'U'}
                </div>
                <span>{currentUser.displayName || currentUser.email?.split('@')[0] || 'User'}</span>
              </Link>
            ) : (
              <Link
                href="/auth/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              >
                <FaUser />
                <span>Login</span>
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 