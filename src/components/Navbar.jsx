import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, logout } from "../redux/slice/authSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(getUser());
  }, [dispatch]);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const linkBase =
    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out tracking-wide";
  const linkInactive = "text-gray-300 hover:text-white hover:bg-gray-700/50";
  const linkActive = "text-white bg-indigo-600 shadow-md";
  const getLinkClass = (isActive) =>
    `${linkBase} ${isActive ? linkActive : linkInactive}`;

  const commonLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/add-blog", label: "Publish" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const navLinks = user
    ? commonLinks
    : [...commonLinks, { to: "/auth", label: "Login | Signup" }];

  const UserAvatar = () => (
    <div
      onClick={toggleDropdown}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-600 text-white font-semibold cursor-pointer hover:scale-105 transition-transform"
      title={user?.name || user?.email}
    >
      {(user?.name || user?.email)?.charAt(0).toUpperCase()}
    </div>
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <header className="w-full bg-gray-900 shadow-xl sticky top-0 z-20">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex h-16 items-center justify-between relative">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wider text-white hover:text-indigo-400 transition-colors z-30"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-indigo-500">Story</span>Nest
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => getLinkClass(isActive)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Avatar + Dropdown */}
            {user && (
              <li className="relative" ref={dropdownRef}>
                <UserAvatar />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => navigate("/profile")}
                      className="flex items-center gap-2 w-full px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-t-lg transition"
                    >
                      <User className="h-4 w-4" /> Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-b-lg transition"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                )}
              </li>
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors z-30"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-10`}
        style={{ height: isOpen ? "100vh" : "0" }}
      >
        <ul className="flex flex-col items-start pt-20 px-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.to} className="w-full">
              <NavLink
                to={link.to}
                end={link.end}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `w-full block text-left ${linkBase} ${
                    isActive ? linkActive : linkInactive
                  } text-base py-3 px-4`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          {/* Mobile Avatar + Dropdown */}
          {user && (
            <li className="px-4 pt-4">
              <div className="flex flex-col items-start gap-2">
                <UserAvatar />
                <button
                  onClick={() => navigate("/profile")}
                  className="flex items-center gap-2 text-gray-200 hover:text-white"
                >
                  <User className="h-4 w-4" /> Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-200 hover:text-white"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
