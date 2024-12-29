import { Link, useLocation } from "react-router-dom";
import logo from "../assets/brand_logo.png";
import HamburgerMenu from "./hamburger";

function Header() {
  const location = useLocation(); // Get the current route
  const menuLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Location", href: "/location" },
    { label: "Menu", href: "/menu" },
  ];

  return (
    <div className="container bg-white p-4">
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Brand Logo" className="h-8" />
          </Link>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex space-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-gray-800 font-semibold underline-animation ${
                location.pathname === link.href ? "active-link" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Button */}
        <div className="hidden md:block">
          <button className="bg-customRed text-sm text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
            Login
          </button>
        </div>

        {/* Hamburger Menu */}
        <HamburgerMenu links={menuLinks} loginButton={true} />
      </div>
    </div>
  );
}

export default Header;
