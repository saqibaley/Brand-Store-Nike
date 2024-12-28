// // import React from "react";
// import logo from "../assets/brand_logo.png";

// function Header() {
//   return (
//     <div className="container bg-white p-4">
//       <div className="flex justify-between items-center">
//         {/* Left: Logo */}
//         <div className="flex-shrink-0">
//           <img src={logo} alt="Brand Logo" className="h-8" />
//         </div>

//         {/* Center: Links */}
//         <div className="flex space-x-6">
//           <a href="/" className="text-gray-800 font-semibold">
//             Home
//           </a>
//           <a href="/about" className="text-gray-800 font-semibold">
//             About
//           </a>
//           <a href="/location" className="text-gray-800 font-semibold">
//             Location
//           </a>
//           <a href="/menu" className="text-gray-800 font-semibold">
//             Menu
//           </a>
//         </div>

//         {/* Right: Button */}
//         <div>
//           <button className="bg-customRed text-sm text-white px-3 p-1">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

// import React from "react";

import logo from "../assets/brand_logo.png";
import HamburgerMenu from "./hamburger";

function Header() {
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
          <img src={logo} alt="Brand Logo" className="h-8" />
        </div>

        {/* Center: Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6">
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-800 font-semibold underline-animation"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Button (Hidden on small screens) */}
        <div className="hidden md:block">
          <button className="bg-customRed text-sm text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
            Login
          </button>
        </div>

        {/* Hamburger Menu (Visible on small screens) */}
        <HamburgerMenu links={menuLinks} loginButton={true} />
      </div>
    </div>
  );
}

export default Header;
