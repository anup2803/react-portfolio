import React, { useState } from "react";
import { Navheader } from "../assets/assets";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#home" className="text-3xl font-bold text-white">
            Code
            <span className="text-purple"> WithAnup</span>
            <div className="w-4 h-4 bg-purple rounded-full "></div>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          {Navheader.map((item) => (
            <a
              href={`#${item.header}`}
              className="relative text-white/80  transition duration-300 hover:text-purple group"
              key={item.id}
            >
              <span className="pb-2">{item.title}</span>
              <span className=" absolute left-0 bottom-1 w-0 h-0.5  bg-purple transition-all duration-300 group-hover:w-full  "></span>
            </a>
          ))}
        </div>
        {/* mobile button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu((prev) => !prev)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu((prev) => !prev)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>
      {/* mobile menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          {Navheader.map((item) => (
            <a
              onClick={() => setShowMenu((prev) => !prev)}
              href={`#${item.header}`}
              className="relative text-white/80  transition duration-300 hover:text-purple group "
              key={item.id}
            >
              <span className="pb-2">{item.title}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
