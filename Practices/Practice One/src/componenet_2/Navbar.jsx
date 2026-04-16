import React, { useState } from "react";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  console.log(mobileView);

  return (
    <div className="bg-green-200 px-8 py-4 flex items-center justify-between ">
      <h1 className="text-2xl font-bold">Logo</h1>

      <div className="flex gap-5 max-[600px]:hidden">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">All Cart</a>
        <a href="#">Contect</a>
      </div>

      <div className="flex gap-5 items-center">
        <span>🛒</span>
        <span>🛒</span>
        <span
          onClick={() => setMobileView(!mobileView)}
          className="border px-2 rounded-lg min-[600px]:hidden"
        >
          🟰
        </span>
      </div>

      <div
        className={`absolute top-0 left-0 flex flex-col text-md  mt-16 h-screen w-[17rem] bg-blue-200  ${mobileView ? "translate-x-[0]" : "-translate-x-[100%]"} transition-all duration-300 min-[600px]:hidden`}
      >
        <button
          onClick={() => setMobileView(false)}
          className="absolute right-2 top-2 border px-3 py-1 rounded-lg"
        >
          ❌
        </button>

        <a
          href="#"
          className="hover:bg-gray-400 flex items-center justify-center p-3"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:bg-gray-400 flex items-center justify-center p-3"
        >
          About
        </a>
        <a
          href="#"
          className="hover:bg-gray-400 flex items-center justify-center p-3"
        >
          Service
        </a>
        <a
          href="#"
          className="hover:bg-gray-400 flex items-center justify-center p-3"
        >
          All Cart
        </a>
        <a
          href="#"
          className="hover:bg-gray-400 flex items-center justify-center p-3"
        >
          Contect
        </a>
      </div>
    </div>
  );
};

export default Navbar;
