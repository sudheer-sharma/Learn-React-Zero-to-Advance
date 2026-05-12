import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-200 p-5 flex gap-5">
      <Link to="Home">Home</Link>
      <Link to="About">About</Link>
      <Link to="Profile">Profile</Link>
      <Link to="Contect">Contect</Link>
      <Link to="Login">Login</Link>
      <Link to="Singup">Singup</Link>
    </div>
  );
};

export default Navbar;
