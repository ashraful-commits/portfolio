import Image from "next/image";
import React from "react";
import chat from "../../public/chat.jpg";
import aboutbg from "../../public/herobg3.jpg";

import aboutbg3 from "../../public/bgabout2.png";
import {
  FaCloudUploadAlt,
  FaCode,
  FaDatabase,
  FaFacebook,
  FaFolderOpen,
  FaGithub,
  FaLaptop,
  FaLink,
  FaLinkedinIn,
  FaReact,
  FaServer,
  FaShoppingCart,
  FaTwitter,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="container-fluid min-h-screen max-h-auto md:ml-[2rem] px w-screen flex justify-center relative overflow-auto   items-center">
      <div className="about-bg absolute  w-full h-full top-0  left-0 z-[-1]">
        <Image
          src={aboutbg}
          className="w-full z-[-1] lg:opacity-40 opacity-40  h-full object-cover"
          alt="about-bg"
        />
      </div>
      <div className="absolute opacity-0 dark:opacity-100 bg-black w-full h-full z-[-1] top-0 left-0">
        <Image
          className=" object-cover dark:opacity-40 w-full h-full"
          src={aboutbg3}
          alt="herobg"
        />
      </div>
      <div className="row flex justify-center dark:bg-transparent dark:bg-opacity-50  w-full h-full p-5 items-center ">
        <div className="col flex justify-center flex-col items-center w-full h-full">
          <div className="contact w-[85vw] h-[85vh] md:w-[85vw] md:h-[50vh] lg:w-[60vw] lg:h-[60vh] flex flex-col md:flex-row lg:flex-row">
            <div className="part1 w-[100%] bg-purple-100 rounded-tl-xl  lg:rounded-tl-xl rounded-tr-xl md:rounded-tr-none lg:rounded-tr-none md:rounded-tl-xl md:rounded-bl-xl dark:bg-gray-900 dark:bg-opacity-80 z-0 h-[100%]  flex justify-center items-center relative">
              <Image
                src={chat}
                alt="contact"
                className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-xl mt-5 z-10 object-cover absolute "
              />
              <div className="z-20 absolute top-[10%] flex items-center justify-start flex-col w-full">
                <p className="flex justify-center items-center gap-5 text-purple-500 text-xl">
                  Hi, Let&apos;s Quick chat <AiFillMessage />
                </p>
                <p className="text-md mb-2 text-purple-800">
                  I reply within 24 hours
                </p>
                <button className="flex bg-purple-500 text-white px-2 py-1 gap-2 justify-center items-center">
                  <FaLink /> Copy email
                </button>
              </div>
            </div>
            <div className="part2 w-[100%] h-[100%] relative flex flex-col rounded-bl-xl lg:rounded-bl-none md:rounded-bl-none rounded-br-xl  md:rounded-tr-xl lg:rounded-tr-xl md:rounded-br-xl  lg:rounded-br-xl justify-between bg-purple-500 dark:bg-gray-900 dark:bg-opacity-80 lg:p-10 md:p-7 p-5">
              <span className="absolute w-5 h-5 rounded-full bg-white"></span>
              <h1 className="text-right text-[30px] lg:text-[45px] leading-10 text-white md:text-[40px] font-bold font-serif italic">
                Contact <br />
                <span className="text-[25px] lg:text-[30px] md:text-[30px]">
                  {" "}
                  ________Me
                </span>
              </h1>
              <form
                action=""
                className="flex flex-col gap-2 lg:gap-5 md:gap-5 "
              >
                <input
                  type="text"
                  className=" focus:border-b-2 focus:outline-none  bg-transparent text-sm border-b-2 py-2 placeholder:text-white"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className=" focus:border-b-2 focus:outline-none  bg-transparent text-sm border-b-2 py-2 placeholder:text-white"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className=" focus:border-b-2 focus:outline-none  bg-transparent text-sm border-b-2 py-2 placeholder:text-white"
                  placeholder="Your message here"
                />
                <button className="bg-white text-purple-600 font-bold px-2 lg:px-4 lg:py-2 py-1 hover:bg-purple-600 hover:text-white transition-all duration-100 delay-75">
                  Submit
                </button>
              </form>
              <div className="icons">
                <ul className="flex justify-center gap-3">
                  <li className="group">
                    <Link href="/">
                      <FaFacebook className="text-white text-lg group-hover:text-blue-500 scale-100 group-hover:scale-110 transition-all duration-100 delay-100" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/">
                      <FaLinkedinIn className="text-white text-lg group-hover:text-blue-800 scale-100 group-hover:scale-125 transition-all duration-100 delay-100" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/">
                      <FaTwitter className="text-white text-lg group-hover:text-sky-500 scale-100 group-hover:scale-125 transition-all duration-100 delay-100" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/">
                      <FaGithub className="text-white text-lg group-hover:text-black scale-100 group-hover:scale-125 transition-all duration-100 delay-100" />
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/">
                      <FaWhatsapp className="text-white text-lg group-hover:text-green-500 scale-100 group-hover:scale-125 transition-all duration-100 delay-100" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
