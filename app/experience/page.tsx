import Image from "next/image";
import React from "react";
import ashraful from "../../public/developer.jpg";
import aboutbg from "../../public/herobg3.jpg";

import aboutbg3 from "../../public/bgabout2.png";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitSquare,
  FaFontAwesomeFlag,
  FaAccessibleIcon,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiExpress,
  SiNextdotjs,
  SiSocketdotio,
} from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";
const Experience = () => {
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
          className=" object-cover dark:opacity-20 w-full h-full"
          src={aboutbg3}
          alt="herobg"
        />
      </div>
      <div className="row flex justify-center dark:bg-transparent dark:bg-opacity-50  w-full h-full p-5 items-center ">
        <div className="col flex justify-center flex-col items-center w-full h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-extrabold text-purple-600 mb-6 md:mb-8 lg:mb-10 capitalize tracking-wide">
            Professional Skills
          </h1>

          <div className="w-full h-full">
            <div className="skills flex gap-5 flex-wrap justify-center lg:px-24 md:px-5 p-5  dark:text-gray-100">
              {/* React.js */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-blue-400 to-blue-500 text-white dark:bg-gradient-to-b dark:from-blue-800 dark:to-blue-900 dark:text-gray-100 hover:from-blue-500 hover:to-blue-600 dark:hover:from-blue-900 dark:hover:to-blue-800">
                <FaReact size={48} />
                React.js
              </div>

              {/* Redux */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-green-400 to-green-500 text-white dark:bg-gradient-to-b dark:from-green-800 dark:to-green-900 dark:text-gray-100 hover:from-green-500 hover:to-green-600 dark:hover:from-green-900 dark:hover:to-green-800">
                <SiRedux size={48} />
                Redux
              </div>

              {/* Node.js */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-purple-400 to-purple-500 text-white dark:bg-gradient-to-b dark:from-purple-800 dark:to-purple-900 dark:text-gray-100 hover:from-purple-500 hover:to-purple-600 dark:hover:from-purple-900 dark:hover:to-purple-800">
                <FaNodeJs size={48} />
                Node.js
              </div>

              {/* MongoDB */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-yellow-400 to-yellow-500 text-white dark:bg-gradient-to-b dark:from-yellow-800 dark:to-yellow-900 dark:text-gray-100 hover:from-yellow-500 hover:to-yellow-600 dark:hover:from-yellow-900 dark:hover:to-yellow-800">
                <SiMongodb size={48} />
                MongoDB
              </div>

              {/* Express */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-gray-400 to-gray-500 text-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 dark:text-gray-100 hover:from-gray-500 hover:to-gray-600 dark:hover:from-gray-900 dark:hover:to-gray-800">
                <SiExpress size={48} />
                Express
              </div>

              {/* CSS3 */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-blue-400 to-blue-500 text-white dark:bg-gradient-to-b dark:from-blue-800 dark:to-blue-900 dark:text-gray-100 hover:from-blue-500 hover:to-blue-600 dark:hover:from-blue-900 dark:hover:to-blue-800">
                <FaCss3Alt size={48} />
                CSS3
              </div>

              {/* JavaScript */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-yellow-400 to-yellow-500 text-white dark:bg-gradient-to-b dark:from-yellow-800 dark:to-yellow-900 dark:text-gray-100 hover:from-yellow-500 hover:to-yellow-600 dark:hover:from-yellow-900 dark:hover:to-yellow-800">
                <FaJsSquare size={48} />
                JavaScript
              </div>

              {/* Git */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-red-400 to-red-500 text-white dark:bg-gradient-to-b dark:from-red-800 dark:to-red-900 dark:text-gray-100 hover:from-red-500 hover:to-red-600 dark:hover:from-red-900 dark:hover:to-red-800">
                <FaGitSquare size={48} />
                Git
              </div>

              {/* Database */}
              <div className="skill flex flex-col items-center gap-2  w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-purple-400 to-purple-500 text-white dark:bg-gradient-to-b dark:from-purple-800 dark:to-purple-900 dark:text-gray-100 hover:from-purple-500 hover:to-purple-600 dark:hover:from-purple-900 dark:hover:to-purple-800">
                <FaDatabase size={48} />
                Database
              </div>
              {/* next js */}
              <div className="skill flex flex-col items-center gap-2 border w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-blue-400 to-blue-500 text-white dark:bg-gradient-to-b dark:from-blue-800 dark:to-blue-900 dark:text-gray-100 hover:from-blue-500 hover:to-blue-600 dark:hover:from-blue-900 dark:hover:to-blue-800">
                <SiNextdotjs size={48} />
                Next.js
              </div>
              {/* Socket.IO */}
              <div className="skill flex flex-col items-center gap-2 border w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-green-400 to-green-500 text-white dark:bg-gradient-to-b dark:from-green-800 dark:to-green-900 dark:text-gray-100 hover:from-green-500 hover:to-green-600 dark:hover:from-green-900 dark:hover:to-green-800">
                <SiSocketdotio size={48} />
                Socket.IO
              </div>
              <div className="skill flex flex-col items-center gap-2 border w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-teal-400 to-teal-500 text-white dark:bg-gradient-to-b dark:from-teal-800 dark:to-teal-900 dark:text-gray-100 hover:from-teal-500 hover:to-teal-600 dark:hover:from-teal-900 dark:hover:to-teal-800">
                <HiOutlineSparkles size={48} /> {/* Use the Heroicon */}
                Tailwind CSS
              </div>
              {/* Bootstrap */}
              <div className="skill flex flex-col items-center gap-2 border w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-purple-400 to-purple-500 text-white dark:bg-gradient-to-b dark:from-purple-800 dark:to-purple-900 dark:text-gray-100 hover:from-purple-500 hover:to-purple-600 dark:hover:from-purple-900 dark:hover:to-purple-800">
                <FaFontAwesomeFlag size={48} /> {/* Use the FontAwesome icon */}
                Bootstrap
              </div>
              {/* Material-UI */}
              <div className="skill flex flex-col items-center gap-2 border w-[90%] md:w-[20%] lg:w-[10%] h-[150px] justify-center bg-gradient-to-b from-pink-400 to-pink-500 text-white dark:bg-gradient-to-b dark:from-pink-800 dark:to-pink-900 dark:text-gray-100 hover:from-pink-500 hover:to-pink-600 dark:hover:from-pink-900 dark:hover:to-pink-800">
                <FaAccessibleIcon sx={{ fontSize: 48 }} />{" "}
                {/* Use the Material-UI icon */}
                Material-UI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
