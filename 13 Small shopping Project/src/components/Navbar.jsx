import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center gap-15 bg-gray-700 text-white py-1 px-8">
      <img
        className="w-16 "
        src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
        alt="logo image"
      />
      <div className="text-lg flex gap-7">
        <Menu to={"/"} title={"Home"} />
        <Menu to={"/products"} title={"Products"} />
      </div>
    </div>
  );
};

const Menu = ({ to, title }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "text-[tomato]" : "")}
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default Navbar;
