"use client";
import Image from "next/image";
import React from "react";
import ashraful from "../../public/developer.jpg";
import aboutbg from "../../public/herobg3.jpg";
import { motion } from "framer-motion";
import aboutbg3 from "../../public/bgabout2.png";

const About = () => {
  return (
    <motion.div
      className="container-fluid min-h-screen max-h-auto px w-screen flex justify-center relative overflow-auto items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-bg absolute  w-full h-full top-0  left-0 z-[-1]">
        <Image
          src={aboutbg}
          className="w-full z-[-1] lg:opacity-50  h-full object-cover"
          alt="about-bg"
        />
      </div>
      <div className="absolute opacity-0 dark:opacity-100 bg-black w-full h-full z-[-1] top-0 left-0">
        <Image
          className=" object-cover  opacity-[35%] w-full h-full"
          src={aboutbg3}
          alt="herobg"
        />
      </div>
      <motion.div
        className="row flex justify-center dark:bg-transparent dark:bg-opacity-50  bg-white bg-opacity-[80%] w-full h-full p-5 items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="col flex flex-col gap-10  lg:gap-10 md:gap-5 lg:flex-row md:flex-row  lg:p-7 px-2 py-2 items-center justify-between w-full h-full">
          <motion.div
            className="top md:ml-10 w-full  flex justify-center items-center  rounded-2xl "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src={ashraful}
              alt=" mohammad ashraful alam"
              className="w-[13rem] h-[13rem] lg:w-[20rem] lg:h-[20rem] md:w-[12rem] md:h-[12rem] rounded-full dark:shadow-none shadow-sm object-cover"
            />
          </motion.div>
          <motion.div
            className="middle w-full text-center border-2 z-[300] relative dark:bg-black dark:border-white border-pink-300  rounded-2xl p-5 bg-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="w-[40px] h-[40px] md:hidden lg:hidden z-[0] border-2 dark:border-white rounded-md dark:bg-black  border-pink-300 border-b-0 border-r-0 bg-white -top-[7%] lg:-top-[8.5%] absolute left-[43%] rotate-45 md:-top-[4.5%] "></span>
            <span className="w-[40px] h-[40px] z-[0] hidden md:block lg:block border-2 dark:border-white  dark:bg-black  rounded-md  border-pink-300  border-r-0 border-t-0 bg-white -left-[1%] lg:-left-[3.5%] absolute top-[43%] rotate-45 md:-left-[7.5%] "></span>
            <h1 className="text-3xl  font-extrabold text-blue-500 mt-2">
              About <span className="text-red-500">Me</span>
            </h1>
            <p className="text-justify mt-2 dark:text-white text-[14px] text-gray-500 lg:text-[18px] px-4 ">
              Greetings! I&apos;m a skilled MERN developer, on a mission to
              transform ideas into captivating digital experiences. My expertise
              in React.js empowers me to engineer efficient code, weaving
              together seamless and intuitive UIs. With a MERN-focused
              background, I&apos;ve honed my skills in architecting RESTful
              APIs, orchestrating databases, and integrating cutting-edge
              libraries that enhance user interactions.
            </p>
            <span className="w-[40px] h-[40px] border-2 md:hidden z-[0] lg:hidden dark:border-white  dark:bg-black rounded-md border-pink-300 border-t-0 border-l-0  bg-white -bottom-[7%] lg:-bottom-[8.5%] md:-bottom-[4.5%]  absolute left-[43%] rotate-45"></span>
            <span className="w-[40px] h-[40px] border-2 z-[0] hidden md:block rounded-md lg:block dark:border-white  dark:bg-black  border-pink-300 border-l-0 border-b-0 bg-white -right-[1%] lg:-right-[3.5%] absolute top-[43%] rotate-45 md:-right-[7.5%] "></span>
          </motion.div>
          <motion.div
            className="bottom  w-full text-center dark:bg-black dark:bg-opacity-70  relative rounded-2xl  p-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-3xl font-extrabold text-orange-500 mt-2">
              My professional Skills
            </h1>
            <p className="text-justify dark:text-white mt-2 text-[14px] text-gray-500 lg:text-[18px]  px-4 ">
              {" "}
              With expertise in both front-end and back-end technologies, I
              ensure the creation of dynamic and user-focused web applications.
              Let&apos;s collaborate to turn your ideas into reality and deliver
              a seamless digital experience. Reach out to discuss your project
              today.
            </p>

            <div className=" px-4 mt-5">
              <div className="mb-1 font-medium text-green-700 mt-2 text-left dark:text-green-500">
                Frontend
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3 dark:bg-gray-300">
                <div className="bg-yellow-400 h-3 rounded-full dark:bg-yellow-400 w-[90%]"></div>
              </div>

              <div className="mb-1 mt-2 text-left font-medium text-red-500 dark:text-red-500">
                Backend
              </div>
              <div className="w-full bg-gray-400 rounded-full h-3 dark:bg-gray-400">
                <div className="bg-pink-600 h-3 rounded-full dark:bg-pink-500 w-[95%]"></div>
              </div>

              <div className="mb-1 text-left mt-2 font-medium text-purple-700 dark:text-purple-500">
                Mern Stack
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3 dark:bg-gray-300">
                <div className="bg-purple-600 h-3 rounded-full dark:bg-purple-500 w-[95%]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
