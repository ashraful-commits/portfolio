import Image from "next/image";
import { FC } from "react";
import myphoto from "../public/myphoto.png";

import herobg3 from "../public/herobg3.jpg";
import herobg4 from "../public/quantam computer.png";
import Link from "next/link";
import { AiFillCiCircle, AiFillFacebook } from "react-icons/ai";
import {
  FaExternalLinkAlt,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Home: FC = () => {
  return (
    <div className="container-fluid w-screen h-screen relative z-[200] ">
      <div className="row w-full h-full">
        <div className="col relative  w-full h-full flex flex-col justify-center items-center ">
          <div className="absolute w-full h-full top-0 left-0">
            <Image
              className=" object-cover dark:opacity-0 lg:opacity-100 md:opacity-[30%] opacity-[50%] w-full h-full"
              src={herobg3}
              alt="herobg"
            />
          </div>
          <div className="absolute opacity-0 dark:opacity-100 bg-black w-full h-full top-0 left-0">
            <Image
              className=" object-cover opacity-0 dark:opacity-40 dark:md:opacity-50  dark:lg:opacity-100 w-full h-full"
              src={herobg4}
              alt="herobg"
            />
          </div>
          <div className=" w-full flex flex-col lg:flex-row  z-100 h-full">
            <div className="w-full flex-col lg:h-full lg:w-[50%] flex items-center z-[500] h-[50%]">
              <Image
                className="w-[15rem] hover:scale-110 transition-all delay-75 hover:skew-z-6  lg:w-[20rem] mt-20  h-auto "
                src={myphoto}
                alt="photo"
              />
              <h1 className="mt-14 text-center hover:scale-y-150 hover:scale-x-150 transition-all duration-200   text-blue-400 lg:text-blue-400 md:text-blue-400  dark:md:text-blue-100 lg:text-4xl uppercase font-extrabold text-[2em]">
                <span className="capitalize  text-orange-200 dark:text-orange-400 lg:text-orange-400 md:text-orange-400 dark:md:text-orange-00">
                  Hi
                </span>
                , i &apos;m
              </h1>

              <h1 className="mt-5 text-center hover:scale-y-150 md:hover:scale-110 lg:hover:scale-x-150 hover:scale-x-105 transition-all duration-200  text-blue-400 lg:text-blue-400 md:text-blue-400  dark:md:text-blue-100 lg:text-4xl uppercase font-extrabold text-[1.5em] md:text-[2rem]">
                Md ashrafula alam
              </h1>
              <h4 className="text-xl hover:scale-y-150 transition-all text-center duration-200 hover:scale-125 text-blue-400 md:text-blue-400  dark:md:text-blue-100 lg:text-blue-400 mt-5 lg:text-2xl lg:font-bold">
                I&apos;m
                <span className="text-2xl mx-1 text-white px-1 animate-pulse bg-green-500 font-bold ml-2">
                  M
                </span>
                <span className="text-2xl mx-1 text-white animate-pulse px-1 bg-red-400">
                  E
                </span>
                <span className="text-2xl mx-1 text-white px-1 animate-pulse bg-blue-500">
                  R
                </span>
                <span className="text-2xl mx-1 text-white px-1 animate-pulse bg-green-300">
                  N
                </span>{" "}
                stack developer
              </h4>
              <div className="mt-10 flex gap-4">
                <Link className="text-blue-100 relative group" href={""}>
                  <span className="absolute top-0 left-0 z-[-1] rounded-full group-hover:bg-white transition-all delay-75 bg-gray-200 w-full h-full"></span>
                  <FaFacebook className="text-3xl hover:scale-150 transition-all duration-100 text-gray-700 rounded-full p-2 group-hover:text-blue-500" />
                </Link>
                <Link className="text-blue-100 relative group" href={""}>
                  <span className="absolute top-0 left-0 z-[-1] rounded-full group-hover:bg-white transition-all delay-75 bg-gray-200 w-full h-full"></span>
                  <FaLinkedinIn className="text-3xl hover:scale-150 transition-all duration-100 text-gray-700  p-2 group-hover:text-blue-900" />
                </Link>
                <Link className="text-blue-100 relative group" href={""}>
                  <span className="absolute top-0 left-0 z-[-1] rounded-full group-hover:bg-white transition-all delay-75 bg-gray-200 w-full h-full"></span>
                  <FaGithub className="text-3xl hover:scale-150 transition-all duration-100 text-gray-700 rounded-full p-2 group-hover:text-gray-500" />
                </Link>
                <Link className="text-blue-100 relative group" href={""}>
                  <span className="absolute top-0 left-0 z-[-1] rounded-full group-hover:bg-white transition-all delay-75 bg-gray-200 w-full h-full"></span>
                  <FaExternalLinkAlt className="text-3xl hover:scale-150 transition-all duration-100 text-gray-700  p-2 group-hover:text-orange-500" />
                </Link>
              </div>
              <button className="mt-10 bg-orange-300 px-8 py-2 rounded-full text-md hover:bg-orange-600 text-white transition-all dark:bg-orange-500 duration-100 font-bold">
                Hire
              </button>
            </div>
            <div className="w-[50%]h-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
