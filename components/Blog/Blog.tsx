"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ashraful from "../../public/developer.jpg";
import aboutbg from "../../public/herobg3.jpg";

import aboutbg3 from "../../public/bgabout2.png";

const Blog = () => {
  interface Post {
    id: number;
    title: string;
    description: string;
    category: string;
    img: string;
  }
  const mernPosts = [
    {
      id: 1,
      title: "Getting Started with MERN Stack",
      description:
        "Learn how to set up and build your first MERN (MongoDB, Express.js, React, Node.js) application.",
      category: "react",
      img: "https://example.com/react-img.jpg",
    },
    {
      id: 2,
      title: "Building RESTful APIs with Node.js and Express",
      description:
        "Explore how to create RESTful APIs using Node.js and Express for your MERN applications.",
      category: "node",
      img: "https://example.com/nodejs-img.jpg",
    },

    {
      id: 10,
      title: "Server-Side Rendering with Next.js in MERN",
      description:
        "Learn how to implement server-side rendering using Next.js in your MERN stack projects.",
      category: "next",
      img: "https://example.com/nextjs-img.jpg",
    },
    {
      id: 3,
      title: "Creating Dynamic UIs with React Hooks",
      description:
        "Explore the power of React Hooks to create dynamic and interactive user interfaces in MERN applications.",
      category: "react",
      img: "https://example.com/react-hooks-img.jpg",
    },
    {
      id: 4,
      title: "Introduction to Express.js for Node.js Development",
      description:
        "Get started with Express.js, a popular framework for building web applications with Node.js in the MERN stack.",
      category: "node",
      img: "https://example.com/express-img.jpg",
    },
    {
      id: 5,
      title: "Building Single-Page Applications (SPAs) with React Router",
      description:
        "Learn how to implement client-side routing and build SPAs using React Router in MERN applications.",
      category: "react",
      img: "https://example.com/react-router-img.jpg",
    },
    {
      id: 6,
      title: "Handling Data with MongoDB in Node.js",
      description:
        "Discover how to integrate MongoDB with Node.js to manage data in MERN stack applications effectively.",
      category: "node",
      img: "https://example.com/mongodb-img.jpg",
    },
    {
      id: 7,
      title: "Styling React Components with CSS Modules",
      description:
        "Learn how to use CSS Modules to style React components and avoid class naming conflicts in MERN projects.",
      category: "react",
      img: "https://example.com/css-modules-img.jpg",
    },
    {
      id: 8,
      title: "Server-Side Rendering (SSR) with React and Next.js",
      description:
        "Explore the benefits of server-side rendering and how to implement SSR using React and Next.js in MERN apps.",
      category: "next",
      img: "https://example.com/ssr-img.jpg",
    },
    {
      id: 9,
      title: "RESTful API Design Best Practices",
      description:
        "Learn essential best practices for designing clean and effective RESTful APIs in MERN stack applications.",
      category: "node",
      img: "https://example.com/api-design-img.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFixed, setIsfixed] = useState(false);

  const handleFixed = () => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      setIsfixed(true);
    } else {
      setIsfixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleFixed);
    return () => removeEventListener("scroll", handleFixed);
  }, []);
  return (
    <motion.div
      className="container-fluid min-h-screen max-h-auto md:ml-[2rem] px w-screen flex justify-center relative overflow-auto   items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
          className=" object-cover dark:opacity-20 w-full h-full"
          src={aboutbg3}
          alt="herobg"
        />
      </div>
      <motion.div
        className="row flex justify-center dark:bg-transparent dark:bg-opacity-50  w-full h-full p-5 items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="col flex justify-center flex-col items-center w-full h-full">
          <motion.h1
            className="text-3xl uppercase md:text-4xl lg:text-5xl xl:text-6xl text-center font-extrabold text-pink-600 mb-6 md:mb-8 lg:mb-10 capitalize tracking-wide"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            All <span className="text-black">posts</span>
          </motion.h1>

          <motion.div
            className="w-[95%] h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              className="post flex items-start bg-white dark:bg-gray-900 p-4 rounded-lg gap-5 flex-col md:flex-row lg:flex-row  shadow-sm w-full "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
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
            </motion.div>
          </motion.div>
          <motion.div
            className={`flex w-full flex-wrap gap-2 justify-center  py-5 border-b-2 border-b-pink-700 z-20  ${
              isFixed
                ? "fixed top-0 left-0 bg-white dark:bg-gray-900 mt-0 transition-all duration-1000"
                : "my-5  mt-4"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button
              onClick={() => setSelectedCategory("all")}
              className={`category-btn px-4 py-2 text-white  bg-gray-500 hover:bg-gray-600 hover:shadow-md transition-colors ${
                selectedCategory === "all" ? "bg-gray-600" : "bg-gray-500"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("react")}
              className={`category-btn px-4 py-2 text-white bg-red-500 hover:bg-red-600 hover:shadow-md transition-colors ${
                selectedCategory === "react" ? "bg-red-600" : "bg-red-500"
              }`}
            >
              React
            </button>
            <button
              onClick={() => setSelectedCategory("node")}
              className={`category-btn px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 hover:shadow-md transition-colors ${
                selectedCategory === "node" ? "bg-blue-600" : "bg-blue-500"
              }`}
            >
              Node.js
            </button>
            <button
              onClick={() => setSelectedCategory("next")}
              className={`category-btn px-4 py-2 text-white bg-green-500 hover:bg-green-600 hover:shadow-md transition-colors  ${
                selectedCategory === "next" ? "bg-green-600" : "bg-green-500"
              } `}
            >
              Next.js
            </button>
          </motion.div>
          <div className="flex flex-col gap-4 z-15  md:flex-row md:gap-5 flex-wrap lg:flex-row w-full lg:gap-5 justify-center items-center ">
            {[...mernPosts].map((item, index) => {
              if (
                selectedCategory === "all" ||
                item.category === selectedCategory
              ) {
                return (
                  <motion.div
                    key={index}
                    className="post flex flex-col items-start bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md  w-[80%] md:w-[30%] lg:w-[22.5%]"
                    layout
                  >
                    <Image
                      src={aboutbg}
                      className="w-[100%] h-auto object-cover rounded-md"
                      alt="blog"
                    />

                    <div className="mt-2 w-full flex justify-between ">
                      <span className="text-xs text-gray-400">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        12 September
                      </span>
                    </div>
                    <h1 className="text-md font-semibold mt-2 ">
                      {item.title}
                    </h1>
                    <p className="text-gray-600 text-sm dark:text-gray-400 mt-2">
                      {item.description}
                    </p>
                    <button className="mt-4 bg-pink-700 text-white px-4 text-sm py-2 rounded-md hover:bg-blue-600 transition-colors">
                      Read more
                    </button>
                  </motion.div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
