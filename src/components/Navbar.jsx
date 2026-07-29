import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      {/* Gradient background span */}
      <span className="absolute inset-0 bg-transparent transition-all duration-500"></span>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
          <b>Arij Abid</b>
        </a>

    {/* Desktop Menu */}
<ul className="list-none hidden sm:flex flex-row gap-3">
  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`text-lg font-medium text-secondary cursor-pointer relative overflow-hidden transition-all duration-300 ${
        active === nav.title ? "text-white bg-customPurple rounded-full" : "hover:bg-customPurple hover:rounded-full"
      }`}
      onClick={() => setActive(nav.title)}
    >
      <a href={`#${nav.id}`} className="block px-4 py-2">
        {nav.title}
      </a>
    </li>
  ))}
</ul>


        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } fixed inset-0 bg-black bg-opacity-75 p-6 z-20 transition-transform transform ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-end w-full h-full">
            <img
              src={close}
              alt="close"
              className="w-8 h-8 mb-4 cursor-pointer"
              onClick={() => setToggle(false)}
            />
       <ul className="list-none flex flex-col gap-6">
  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`text-lg font-medium text-white cursor-pointer ${
        active === nav.title 
          ? "font-bold text-white bg-customPurple rounded-full"
          : "hover:bg-customPurple hover:rounded-full"
      }`}
      onClick={() => {
        setToggle(false);
        setActive(nav.title);
      }}
    >
      <a href={`#${nav.id}`}>{nav.title}</a>
    </li>
  ))}
</ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
