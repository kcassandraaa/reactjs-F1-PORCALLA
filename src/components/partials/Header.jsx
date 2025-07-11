import React from 'react'
import Logo from '../../svg/Logo';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      {/* Header */}
      <header className="bg-black text-white p-4 shadow-md sticky z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <nav>
            <ul className=" hidden md:flex space-x-6">
              <li className="hover:text-yellow-300 cursor-pointer">Home</li>
              <li className="hover:text-yellow-300 cursor-pointer">Races</li>
              <li className="hover:text-yellow-300 cursor-pointer">Drivers</li>
              <li className="hover:text-yellow-300 cursor-pointer">Teams</li>
            </ul>

            <button
              onClick={toggleMenu}
              className="md:hidden text-xl focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : "☰"}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >

        <nav>
          <ul className="flex flex-col items-center space-y-8 text-white text-2xl">
            <li
              className="hover:text-yellow-300 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Races
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Drivers
            </li>
            <li
              className="hover:text-yellow-300 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
