import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About page</h1>

      <div className="bg-amber-500 h-[19rem] w-[19rem] m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default About;
