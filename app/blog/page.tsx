import Image from "next/image";
import React from "react";
import ashraful from "../../public/developer.jpg";
import aboutbg from "../../public/herobg3.jpg";

import aboutbg3 from "../../public/bgabout2.png";

const Blog = () => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-extrabold text-pink-600 mb-6 md:mb-8 lg:mb-10 capitalize tracking-wide">
            All blog posts
          </h1>

          <div className="w-[95%] h-auto">
            <div className="post flex items-start bg-white dark:bg-gray-900 p-4 rounded-lg gap-5 flex-col md:flex-row lg:flex-row  shadow-sm w-full ">
              <div className="flex justify-center min-w-[50%]  items-center w-full h-full">
                <Image
                  src={aboutbg}
                  className="w-full h-full object-cover rounded-md"
                  alt="blog"
                />
              </div>
              <div className="w-full mb-5 ">
                <div className="mt-2 text-gray-500 flex justify-between">
                  <span className="text-xs">Category</span>
                  <span className="ml-2 text-xs">12 September</span>
                </div>
                <h1 className="text-lg font-semibold mt-2">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-gray-700 dark:text-gray-400 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  consequatur.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-2 justify-center my-5 py-5 border-b-2 border-b-pink-700 z-20 mt-4">
            <button className="category-btn px-4 py-2 text-white bg-pink-500 hover:bg-pink-600 hover:shadow-md transition-colors">
              React
            </button>
            <button className="category-btn px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 hover:shadow-md transition-colors">
              Node.js
            </button>
            <button className="category-btn px-4 py-2 text-white bg-green-500 hover:bg-green-600 hover:shadow-md transition-colors">
              Next.js
            </button>
          </div>
          <div className="flex flex-col gap-4 z-20  md:flex-row md:gap-5 flex-wrap lg:flex-row w-full lg:gap-5 justify-center items-center ">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="post flex flex-col items-start bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md  w-[80%] md:w-[25%] lg:w-1/5"
              >
                <Image
                  src={aboutbg}
                  className="w-[100%] h-auto object-cover rounded-md"
                  alt="blog"
                />

                <div className="mt-2 w-full flex justify-between ">
                  <span className="text-xs text-gray-400">Category</span>
                  <span className="text-xs text-gray-400">12 September</span>
                </div>
                <h1 className="text-md font-semibold mt-2 ">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="text-gray-600 text-sm dark:text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  consequatur.
                </p>
                <button className="mt-4 bg-pink-700 text-white px-4 text-sm py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
