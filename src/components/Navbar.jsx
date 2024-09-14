/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const navitems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({toggleMenu}) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navitems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ?  "text-primary" : "hover:text-primary"
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState=> !prevState);
  };

  return (
    //This is used for Hero secton related--header code only
    <header className={`fixed top-0 left-0 right-0 z-50 text-white transition duration-300 ease-in-out`}> 
      <nav className="max-w-screen-xl container mx-auto py-6 px-4 flex justify-between items-center">
        {/* logo */}
        <Link to={"/"} className="font-bold">
          logo
        </Link>
        {/* menu for mobile divce */}
        <div className="md:hidden hover:text-primary text-xl cursor-pointer }" onClick={toggleMenu}>
          {
            isOpen? null : <FaBars />
          }
        </div>
        {/* menu for desktop divce */}
        <div className="hidden md:flex">{<NavItems />}</div>
        {/* for menu for mobile */}
        <div className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-75 flex flex-col justify-center items-center space-y-8 text-white transition-transform  transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
          <div className="absolute top-0 right-0 p-4 text-xl" onClick={toggleMenu}>
            <FaTimes/> 
          </div>
          <NavItems toggleMenu={toggleMenu}/>
        </div>
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingCart className="text-xl"/>
          <sup className="absolute top-0 -right-4 bg-primary flex items-center justify-center text-white text-sm w-5 h-5 rounded-full">0</sup></div>
      </nav>
    </header>
  );
};

export default Navbar;
