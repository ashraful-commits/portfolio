"use client";
import Link from "next/link";
import {
  AiOutlineClose,
  AiFillHome,
  AiFillInfoCircle,
  AiFillMessage,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import { FcServices } from "react-icons/fc";

import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaBlog, FaServicestack } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/devloper ashraful-dark.png";
import logoMoon from "../../public/devloper ashraful.png";
import ToggleButton from "../ThemProviderButton/ThemeButton";

const Header = () => {
  const { theme }: any = useTheme();
  const isDarkTheme = theme === "dark";
  const [menu, setMenu] = useState(false);
  const handTogglemenu = () => {
    setMenu(!menu);
  };
  const handleToggleMenu = () => {
    setMenu(false);
  };
  useEffect(() => {
    window.document.addEventListener("click", handleToggleMenu);

    return () => {
      window.document.removeEventListener("click", handleToggleMenu);
    };
  });
  return (
    <>
      <div
        className={`col fixed top-0 right-0 flex justify-start  items-center h-full z-[10000] ${
          menu ? "opacity-100" : "opacity-0"
        } lg:opacity-100 md:opacity-100 `}
      >
        <div className="w-[4rem] flex flex-col transition-all duration-100 delay-75  bg-gray-200 dark:bg-gray-700  text-white h-full items-center justify-center">
          <div className="logo h-[100px] group  relative ">
            <span className="absolute -top-[60%] cursor-pointer left-[120%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-xl rounded-bl-none text-white">
              {isDarkTheme ? "light" : "dark"}
            </span>

            <ToggleButton />
          </div>
          <div className="logo h-[100px] group relative ">
            <span className="absolute -top-[60%] cursor-pointer left-[120%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-xl rounded-bl-none text-white">
              Developer Ashraful
            </span>
            <Link href={"/"}>
              {isDarkTheme ? (
                <Image
                  alt="logo"
                  className="w-6 h-6 lg:w-10 md:w-7 md:h-7 lg:h-10"
                  src={logo}
                />
              ) : (
                <Image
                  alt="logo"
                  className="w-8 h-8 lg:w-10 lg:h-10"
                  src={logoMoon}
                />
              )}
            </Link>
          </div>
          <div className="menu   ">
            <ul className="flex flex-col gap-5 ">
              <li className="p-2 relative  bg-gray-100 cursor-pointer group text-black  rounded-md hover:bg-red-600 hover:text-white transition-all duration-100 delay-100">
                <span className="absolute -top-[95%] left-[95%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-full rounded-bl-none text-white">
                  Home
                </span>
                <Link href={"/"} className="w-full h-full">
                  <AiFillHome className="lg:text-xl group-hover:text-white w-full h-full text-red-500" />
                </Link>
              </li>
              <li className="p-2 relative  bg-gray-100 cursor-pointer group text-black  rounded-md hover:bg-red-600 hover:text-white transition-all duration-100 delay-100">
                <span className="absolute -top-[95%] left-[95%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-full rounded-bl-none text-white">
                  Me
                </span>
                <Link href={"/me"} className="w-full h-full">
                  <AiOutlineUser className="lg:text-xl group-hover:text-white w-full h-full text-red-500" />
                </Link>
              </li>
              <li className="p-2 relative  bg-gray-100 cursor-pointer group text-black  rounded-md hover:bg-red-600 hover:text-white transition-all duration-100 delay-100">
                <span className="absolute -top-[100%] left-[120%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-full rounded-bl-none text-white">
                  About
                </span>
                <Link href={"/about"} className="w-full h-full">
                  <AiFillInfoCircle className="lg:text-xl group-hover:text-white w-full h-full text-blue-500" />
                </Link>
              </li>
              <li className="p-2 relative  bg-gray-100 cursor-pointer group text-black  rounded-md hover:bg-red-600 hover:text-white transition-all duration-100 delay-100">
                <span className="absolute -top-[100%] left-[120%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-full rounded-bl-none text-white">
                  Skills
                </span>
                <Link href={"/experience"} className="w-full h-full">
                  <MdCastForEducation className="lg:text-xl group-hover:text-white w-full h-full text-purple-500" />
                </Link>
              </li>
              <li className="p-2 relative  bg-gray-100 cursor-pointer group text-black  rounded-md hover:bg-red-600 hover:text-white transition-all duration-100 delay-100">
                <span className="absolute -top-[100%] left-[120%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-full rounded-bl-none text-white">
                  Portfolio
                </span>
                <Link href={"/protfolio"} className="w-full h-full ">
                  <BsFillBriefcaseFill className="lg:text-xl group-hover:text-white w-full h-full text-yellow-500" />
                </Link>
              </li>
              <li className="p-2 relative  bg-gray-100 cursor-pointer group text-black  rounded-md hover:bg-red-600 hover:text-white transition-all duration-100 delay-100">
                <span className="absolute -top-[100%] left-[120%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-full rounded-bl-none text-white">
                  Services
                </span>
                <Link href={"/services"} className="w-full h-full ">
                  <FcServices className="lg:text-xl text-green-500 hover:text-white" />
                </Link>
              </li>
              <li className="p-2 relative  bg-gray-100 cursor-pointer group text-black  rounded-md hover:bg-red-600 hover:text-white transition-all duration-100 delay-100">
                <span className="absolute -top-[100%] left-[120%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-full rounded-bl-none text-white">
                  Contact
                </span>
                <Link href={"/contact"} className="w-full h-full">
                  <AiFillMessage className="lg:text-xl group-hover:text-white w-full h-full text-indigo-500" />
                </Link>
              </li>
              <li className="p-2 relative  bg-gray-100 cursor-pointer group text-black  rounded-md hover:bg-red-600 hover:text-white transition-all duration-100 delay-100">
                <span className="absolute -top-[100%] left-[120%] border border-gray-300 animate-bounce group-hover:block hidden bg-red-500  px-4 py-1  rounded-full rounded-bl-none text-white">
                  Blog
                </span>
                <Link href={"/blog"}>
                  <FaBlog className="lg:text-xl group-hover:text-white w-full h-full text-pink-500" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={handTogglemenu}
        className=" rounded-full fixed text-dark lg:hidden md:hidden opacity-100 bg-orange-500  p-2 right-[2%] z-[10000] bottom-[1%] "
      >
        {menu ? (
          <AiOutlineClose className="text-white font-bold" />
        ) : (
          <AiOutlineMenu className="text-white font-bold" />
        )}
      </button>
      <button
        onClick={handTogglemenu}
        className=" rounded-full fixed text-dark lg:hidden md:hidden opacity-100   p-2 left-[2%] z-[10000] top-[1%] "
      >
        {isDarkTheme ? (
          <Image
            alt="logo"
            className="w-6 h-6 lg:w-10 md:w-7 md:h-7 lg:h-10"
            src={logo}
          />
        ) : (
          <Image
            alt="logo"
            className="w-8 h-8 lg:w-10 lg:h-10"
            src={logoMoon}
          />
        )}
      </button>
    </>
  );
};

export default Header;
