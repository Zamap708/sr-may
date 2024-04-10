import React from "react";

export default function Navbar() {
  return (
    <div className="fixed z-50 top-0 left-0 w-full flex items-center justify-center bg-primary text-[9px] md:text-base text-white h-16 font-bold font-gotham">
      <ul className="w-full flex justify-center items-center">
        <li className="px-2 hover:text-textcolor hover:cursor-pointer border-r-2 border-white">
          HOME
        </li>
        <li className="px-2 hover:text-textcolor hover:cursor-pointer border-r-2 border-white">
          ABOUT
        </li>
        <li className="px-2 hover:text-textcolor hover:cursor-pointer border-r-2 border-white">
          DONATIONS
        </li>
        <li className="px-2 hover:text-textcolor hover:cursor-pointer border-r-2 border-white">
          EVENTS
        </li>
        <li className="px-2 hover:text-textcolor hover:cursor-pointer border-r-2 border-white">
          GALLERY
        </li>
        <li className="px-2 hover:text-textcolor hover:cursor-pointer">CONTACT</li>
      </ul>
    </div>
  );
}
