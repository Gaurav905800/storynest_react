import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  let isLoggedIn = false;
  try {
    if (auth) {
      isLoggedIn = Boolean(auth.user || auth.token);
    }
  } catch (e) {
    isLoggedIn = false;
  }

  if (!isLoggedIn) {
    const lsToken =
      typeof window !== "undefined" && localStorage.getItem("token");
    isLoggedIn = Boolean(lsToken);
  }

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Features", to: "#features" },
    { name: "About", to: "#about" },
    { name: "Contact", to: "#contact" },
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(sectionId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleLogout = () => {
    try {
      if (auth && typeof auth.logout === "function") {
        auth.logout();
      }
    } catch (e) {}

    try {
      localStorage.removeItem("token");
      localStorage.removeItem("auth");
    } catch (e) {}

    navigate("/");
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-purple-600 tracking-tight"
        >
          StoryNest
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => scrollToSection(link.to)}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Conditionally render Login button only when NOT logged in */}
          {!isLoggedIn ? (
            <Link
              to="/auth"
              className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300"
            >
              Login
            </Link>
          ) : (
            <div className="relative group">
              <button className="flex items-center gap-2 px-5 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300">
                <span>Account</span>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-xl border border-gray-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <Link
                  to="/home"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-t-xl"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-b-xl"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          {/* Always show CTA */}
          <Link
            to="/home"
            className="px-5 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => scrollToSection(link.to)}
              className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 pt-3 border-t border-gray-200">
            {!isLoggedIn ? (
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-purple-600 text-white text-center rounded-full hover:bg-purple-600 transition-all duration-300"
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  to="/home"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-center rounded-full hover:bg-gray-50 transition-all duration-300 border border-gray-200"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-center rounded-full border border-gray-200 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            )}

            <Link
              to="/home"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-indigo-600 text-indigo-600 text-center rounded-full hover:bg-indigo-50 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
