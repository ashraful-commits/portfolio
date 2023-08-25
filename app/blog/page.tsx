import Image from "next/image";
import React from "react";
import ashraful from "../../public/developer.jpg";
import aboutbg from "../../public/herobg3.jpg";
import aboutbg2 from "../../public/bgabout.png";
import aboutbg3 from "../../public/bgabout2.png";
const About = () => {
  return (
    <div className="container-fluid min-h-screen max-h-auto px w-screen flex justify-center relative overflow-auto   items-center">
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
      <div className="row flex justify-center dark:bg-transparent dark:bg-opacity-50  bg-white bg-opacity-[80%] w-full h-full p-5 items-center ">
        <div className="col flex flex-col gap-10  lg:gap-10 md:gap-5 lg:flex-row md:flex-row  lg:p-7 px-2 py-2 items-center justify-center w-full h-full">
          <h1 className="text-[40px] text-red-500">Coming Soon ...</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
