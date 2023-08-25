import Image from "next/image";
import React from "react";
import ashraful from "../../public/developer.jpg";
import aboutbg from "../../public/herobg3.jpg";
import aboutbg2 from "../../public/bgabout.png";
import aboutbg3 from "../../public/bgabout2.png";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-blue-500 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={aboutbg}
          className="w-full h-full object-cover opacity-50"
          alt="about-bg"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="w-full flex flex-col justify-center items-center bg-white bg-opacity-80 p-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-500 mt-4 md:mt-6 lg:mt-8">
          Blog
        </h1>

        <div className="flex flex-wrap gap-2 justify-center mt-4">
          <button className="category-btn bg-pink-500 hover:bg-pink-600 hover:shadow-md transition-colors">
            React
          </button>
          <button className="category-btn bg-blue-500 hover:bg-blue-600 hover:shadow-md transition-colors">
            Node.js
          </button>
          <button className="category-btn bg-green-500 hover:bg-green-600 hover:shadow-md transition-colors">
            Next.js
          </button>
        </div>

        <div className="flex flex-col mt-8 space-y-8 md:flex-row lg:flex-row w-full items-center">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="post flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
            >
              <Image
                src={ashraful}
                className="w-[50%] h-auto object-cover rounded-md"
                alt="blog"
              />

              <div className="mt-2 text-gray-500">
                <span className="font-medium">Category</span>
                <span className="ml-2">12 September</span>
              </div>
              <h1 className="text-xl font-semibold mt-2">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                consequatur.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
