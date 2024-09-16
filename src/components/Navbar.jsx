/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
//import logo from "../assets/logo.png";

const navitems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({ toggleMenu, isScrolled }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navitems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `${isScrolled ? "text-primary" : "text-white"}`
                : `${isScrolled ? "hover:text-primary text-black" : "hover:text-primary text-white"}`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false); // for toggle mobile device
  const [isScrolled, setIsScrolled] = useState(false); // for navbar scrolling

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-md text-primary dark:text-black"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-screen-xl container mx-auto py-6 px-4 flex justify-between items-center">
        {/* logo */}
        <Link to={"/"} className="font-bold">
          REAL FURNITURE
        </Link>
        {/* menu for mobile device */}
        <div
          className="md:hidden hover:text-primary text-xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? null : <FaBars />}
        </div>
        {/* menu for desktop device */}
        <div className="hidden md:flex">
          <NavItems isScrolled={isScrolled} />
        </div>
        {/* menu for mobile */}
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-75 flex flex-col justify-center items-center space-y-8 text-white transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div
            className="absolute top-0 right-0 p-4 text-xl"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          <NavItems toggleMenu={toggleMenu} isScrolled={isScrolled} />
        </div>
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingCart className="text-xl" />
          <sup className="absolute top-0 -right-4 bg-primary flex items-center justify-center text-white text-sm w-5 h-5 rounded-full">
            {cartCount}
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
