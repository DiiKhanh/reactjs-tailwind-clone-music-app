import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        onClick={() => handleClick && handleClick()}
        className="flex flex-row justify-start items-center my-4 text-sm font-medium text-gray-400 hover:text-cyan-400"
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img
          src={logo}
          alt="logo_website"
          className="w-full h-14 object-contain"
        />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="h-6 w-6 mr-2 text-white" 
          onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu className="h-6 w-6 mr-2 text-white" 
          onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div className={`md:hidden ${mobileMenuOpen?'left-0':'-left-full'} absolute w-2/3 top-0 h-screen bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 smooth-transition`}>
        <img
          src={logo}
          alt="logo_website"
          className="w-full h-14 object-contain"
        />
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>
    </>
  );
};

export default Sidebar;
