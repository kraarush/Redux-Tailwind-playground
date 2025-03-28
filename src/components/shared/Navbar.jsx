import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-white">
      <h1 className="text-[#00df9a] text-3xl font-bold w-full ">React App</h1>

      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/" className="text-gray-300 hover:text-[#00df9a] transition-colors duration-300"> Home </Link>
        </li>
        <li className="p-4">
          <Link to="/about" className="text-gray-300 hover:text-[#00df9a] transition-colors duration-300"> About </Link>
        </li>
        <li className="p-4">
          <Link to="/contact" className="text-gray-300 hover:text-[#00df9a] transition-colors duration-300"> Contact </Link>
        </li>
        <li className="p-4">
          <Link to="/counter" className="text-gray-300 hover:text-[#00df9a] transition-colors duration-300"> Counter </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!navOpen ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={
          navOpen
            ? " fixed left-0 top-0 w-[60%] h-full border-r  rounded-md border-r-gray-800 bg-[#000300] ease-in-out duration-500 "
            : "fixed left-[-100%] "
        }
      >
        <h1 className="text-[#00df9a] text-3xl font-bold w-full m-4 ">
          React App
        </h1>
        <ul className="uppercase justify-center">
          <li className="p-4 border-b border-gray-600">
            <Link to="/" onClick={handleNav} className="text-gray-300 hover:text-[#00df9a] transition-colors duration-300">
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about" onClick={handleNav} className="text-gray-300 hover:text-[#00df9a] transition-colors duration-300">
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/contact" onClick={handleNav} className="text-gray-300 hover:text-[#00df9a] transition-colors duration-300">
              Contact
            </Link>
          </li>
          <li className="p-4">
            <Link to="/counter" onClick={handleNav} className="text-gray-300 hover:text-[#00df9a] transition-colors duration-300">
              Counter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
