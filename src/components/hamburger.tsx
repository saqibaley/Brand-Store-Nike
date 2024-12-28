import React, { useState } from "react";

interface HamburgerMenuProps {
  links: { label: string; href: string }[]; // Array of menu links
  loginButton?: boolean; // Whether to show a login button
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  links,
  loginButton = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-gray-800 focus:outline-none"
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-800 font-semibold"
            >
              {link.label}
            </a>
          ))}
          {loginButton && (
            <button className="bg-customRed text-white text-sm px-3 py-2 w-full text-center rounded-md hover:bg-red-600 transition">
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
