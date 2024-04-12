import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import { FaRegWindowClose } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed z-10 top-0 left-0">
      <div className="flex justify-between items-center bg-white  py-3 md:px-10 px-7">
        <div className="flex justify-center items-center">
        <div className="text-sm  text-black tracking-[0.05em] font-pacifico font-normal">
          dribbble
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-3 top-3.5 cursor-pointer md:hidden"
        >
          {open ? <FaRegWindowClose /> : <TiThMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 md:ml-7 pb-4 absolute md:static bg-white shadow-md md:shadow-none md:z-auto z-[-1] left-0 w-full md:w-auto md:gap-2 md:pl-0 pl-9 transition-all duration-500 ease-in pt-3 md:pt-0 ${
            open ? "top-[48px]" : "top-[-490px]"
          }`}
        >
          <li className="font-semibold text-gray-600  hover:bg-black cursor-pointer hover:text-white text-center text-sm  p-1 md:p-1 pl-2  rounded-sm">
            Inspiration
          </li>
          <li className="font-semibold text-gray-600 hover:bg-black cursor-pointer hover:text-white text-center text-sm p-1 pl-2 md:p-1  rounded-sm">
            Find Work
          </li>
          <li className="font-semibold text-gray-600 hover:bg-black cursor-pointer hover:text-white text-center text-sm p-1 pl-2 md:p-1  rounded-sm">
            Learn Design
          </li>
          <li className="font-semibold text-gray-600 hover:bg-black cursor-pointer hover:text-white text-center text-sm p-1 pl-2 md:p-1  rounded-sm">
            Go Pro
          </li>
          <li className="font-semibold text-gray-600 hover:bg-black cursor-pointer hover:text-white text-center text-sm p-1 pl-2 md:p-1  rounded-sm">
            Hire Designer
          </li>
          <li className="md:hidden block font-semibold  text-gray-600 hover:bg-pink-600 cursor-pointer hover:text-white text-center text-sm p-1 pl-2 md:p-1  rounded-sm">
            Upload
          </li>
        </ul>
        </div>
        <div className="flex ">
          <span className="flex border-2 border-transparent hover:border-gray-200 mr-5 sm:mr-10 ">
            <input type="text" className="w-[30vw] sm:w-[15vw] outline-none p-1" />
            <button className="flex items-center bg-gray-200 px-2 py-1">
              <CiSearch />
              Search
            </button>
          </span>
          <button className="hidden md:block  text-sm bg-pink-600 text-white border-none px-2 rounded-md   hover:bg-pink-800 cursor-pointer">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
