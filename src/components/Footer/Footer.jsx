import React from "react";
import { BiBasketball } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-200 pt-1">
    <div className="mt-10  font-roboto flex justify-center gap-5">
      <div className="flex flex-col gap-5 w-1/4">
        <div className="text-sm w-full text-pink-500 tracking-[0.05em] font-pacifico   mt-5">
          dribbble
        </div>
        <p>
          Dribbble is the world's leading community for creatives to share, grow
          and get hired.
        </p>
        <div className="flex sm:flex-row flex-col gap-4 text-xl">
          <BiBasketball className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <AiFillFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
        </div>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2  gap-5">
        <ul className="flex flex-col gap-3">
          <h3 className="font-bold ">For Designers</h3>
          <li className=" cursor-pointer text-gray-500 ">
            Lorem ipsum dolor
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum dolor
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            ipsum dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum sit.
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <h3 className="font-bold">Hire Designers</h3>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum dolor
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            ipsum dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum sit.
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <h3 className="font-bold">Company</h3>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum dolor
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            ipsum dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum sit.
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <h3 className="font-bold">Directories</h3>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum dolor
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            ipsum dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum sit.
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <h3 className="font-bold">Design Resources</h3>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum dolor
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            ipsum dolor sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum sit.
          </li>
          <li className=" cursor-pointer text-gray-500">
            Lorem ipsum sit.
          </li>
        </ul>
      </div>
    </div>
    <div className="flex md:flex-row flex-col justify-between items-center p-5 mt-10 font-roboto text-gray-500 border-t-2 border-gray-300">
  <span className="flex items-center gap-2">  <FaRegCopyright />2023 Dribbble. All rights reserved.</span>
  <span className="flex  items-center gap-2"><span className="font-bold text-black">20,501,853</span>shots dirbbbled <FaBasketballBall className="text-pink-600" /></span>
    </div>
    </div>
  );
}

export default Footer;
