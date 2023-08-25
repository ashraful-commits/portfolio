"use client";
import Image from "next/image";
import React from "react";
import chat from "../../public/chat.jpg";
import aboutbg from "../../public/herobg3.jpg";
import { motion } from "framer-motion";
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
    <motion.div
      className="container-fluid min-h-screen max-h-auto md:ml-[2rem] px w-screen flex justify-center relative overflow-auto   items-center"
      initial={{ opacity: 0 }} // Initial animation properties
      animate={{ opacity: 1 }} // Animation properties when component is mounted
      exit={{ opacity: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
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
                className="w-[190px] h-[150px] lg:w-[270px] lg:h-[250px] rounded-xl mt-5 z-10 object-cover absolute md:w-[220px]"
              />
              <div className="z-20 absolute top-[10%] flex items-center justify-start flex-col w-full">
                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="flex justify-center items-center gap-2 text-purple-500 text-xl"
                >
                  Hi, Let&apos;s Quick chat <AiFillMessage />
                </motion.p>
                <motion.p
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-md mb-2 text-purple-800 dark:text-purple-200"
                >
                  I reply within 24 hours
                </motion.p>
                <motion.button
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="flex bg-purple-500 text-white mt-[170px] md:mt-[220px] lg:mt-[290px] px-[12px] py-[6px] text-sm gap-2 rounded-md justify-center items-center"
                >
                  <FaLink /> Copy email
                </motion.button>
              </div>
            </div>
            <div className="part2 w-[100%] h-[100%] relative flex flex-col rounded-bl-xl lg:rounded-bl-none md:rounded-bl-none rounded-br-xl  md:rounded-tr-xl lg:rounded-tr-xl md:rounded-br-xl  lg:rounded-br-xl justify-between bg-purple-500 dark:bg-gray-900 dark:bg-opacity-80 lg:p-10 md:p-7 p-5">
              <span className="absolute w-5 h-5 rounded-full bg-white"></span>
              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-right text-[32px] lg:text-[45px] leading-10 text-white md:text-[40px] font-bold font-serif italic"
              >
                Contact <br />
                <span className="text-[30px] lg:text-[32px] md:text-[32px]">
                  {" "}
                  <span className="text-orange-500"> ________Me</span>
                </span>
              </motion.h1>
              <form
                action=""
                className="flex flex-col gap-7 lg:gap-10 md:gap-5 "
              >
                <motion.input
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  type="text"
                  className=" focus:border-b-2 focus:outline-none  bg-transparent text-sm border-b-2 py-2 placeholder:text-white"
                  placeholder="Your Name"
                />
                <motion.input
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  type="text"
                  className=" focus:border-b-2 focus:outline-none  bg-transparent text-sm border-b-2 py-2 placeholder:text-white"
                  placeholder="Your Email"
                />
                <motion.input
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  type="text"
                  className=" focus:border-b-2 focus:outline-none  bg-transparent text-sm border-b-2 py-2 placeholder:text-white"
                  placeholder="Your message here"
                />
                <motion.button
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="bg-white text-purple-600 mb-5 font-bold px-2 lg:px-4 lg:py-2 py-1 hover:bg-purple-600 hover:text-white transition-all duration-100 delay-75 mt-5"
                >
                  Submit
                </motion.button>
              </form>
              <div className="icons">
                <ul className="flex justify-center gap-3">
                  <motion.li
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="group"
                  >
                    <Link href="/">
                      <FaFacebook className="text-white text-lg group-hover:text-blue-500 scale-100 group-hover:scale-110 transition-all duration-100 delay-100" />
                    </Link>
                  </motion.li>
                  <motion.li
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="group"
                  >
                    <Link href="/">
                      <FaLinkedinIn className="text-white text-lg group-hover:text-blue-800 scale-100 group-hover:scale-125 transition-all duration-100 delay-100" />
                    </Link>
                  </motion.li>
                  <motion.li
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="group"
                  >
                    <Link href="/">
                      <FaTwitter className="text-white text-lg group-hover:text-sky-500 scale-100 group-hover:scale-125 transition-all duration-100 delay-100" />
                    </Link>
                  </motion.li>
                  <motion.li
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="group"
                  >
                    <Link href="/">
                      <FaGithub className="text-white text-lg group-hover:text-black scale-100 group-hover:scale-125 transition-all duration-100 delay-100" />
                    </Link>
                  </motion.li>
                  <motion.li
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="group"
                  >
                    <Link href="/">
                      <FaWhatsapp className="text-white text-lg group-hover:text-green-500 scale-100 group-hover:scale-125 transition-all duration-100 delay-100" />
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
