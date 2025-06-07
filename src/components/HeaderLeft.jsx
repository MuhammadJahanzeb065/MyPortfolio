import React from "react";
import { BiCode, BiMailSend, BiRightArrow, BiSolidContact } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function HeaderLeft() {
  return (
    <div className="md:flex-[1]">
      <div
        className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center
      bg-teal-600 text-white"
      >
        <ul className="flex flex-col gap-10">
          {["Home", "Experience", "Project", "Contact"].map((item) => (
            <li
              key={item}
              className="flex items-center justify-start cursor-pointer font-medium 
            transition-all duration-200 group sm:text-lg md:text-xl xl:text-3xl"
            >
              <GoChevronRight
                className="text-2xl -translate-x-5 opacity-0 transform transition-all
              duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              />
              <a
                href={`#${item}`}
                className="transition-all duration-200 hover:translate-x-3"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

          {/* for mobile screen */}
      <div className="fixed right-0 left-0 top-0 z-10
      flex justify-evenly bg-teal-600 text-white md:hidden">

        <a href="#Home" className="flex flex-col justify-center items-center">
          <BiHome className="text-2xl"/>
          <span className="text-xm">Home</span>
        </a>
        <a href="#Experience" className="flex flex-col justify-center items-center">
          <BiBriefcase className="text-2xl"/>
          <span className="text-xm">Experience</span>
        </a>
        <a href="#Project" className="flex flex-col justify-center items-center">
          <BiCode className="text-2xl"/>
          <span className="text-xm">Project</span>
        </a>
        <a href="#Contact" className="flex flex-col justify-center items-center">
          <BiMailSend className="text-2xl"/>
          <span className="text-xm">Contact</span>
        </a>
      </div>
    </div>
  );
}

export default HeaderLeft;
