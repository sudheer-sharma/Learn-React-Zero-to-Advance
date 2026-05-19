import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let arr = ["a", "b", "c", "d", "e"];

  return (
    <div className="bg-amber-200 p-5 flex gap-5">
      <Link to="Home">Home</Link>
      <Link to="About">About</Link>
      <Link to="Contect">Contect</Link>
      <Link to="Profile">Profile</Link>
      <Link to="Login">Login</Link>
      <Link to="Singup">Singup</Link>

      {arr.map((items) => {
        return (
          <Link key={items} to={`/Contect/${items}`}>
            {items}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
