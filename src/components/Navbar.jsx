import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Survey", path: "/survey" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#0f1f1c] shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Site Title */}
        <Link to="/" className="text-2xl font-bold text-green-400 tracking-wide">
          A<span className="text-white">ushad</span><span className="text-green-300">I</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition duration-300 ${
                location.pathname === link.path
                  ? "text-green-300 border-b-2 border-green-300 pb-1"
                  : "text-gray-300 hover:text-green-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
