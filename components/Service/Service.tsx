"use client";
import Image from "next/image";
import React from "react";
import ashraful from "../../public/developer.jpg";
import aboutbg from "../../public/herobg3.jpg";
import { motion } from "framer-motion";
import aboutbg3 from "../../public/bgabout2.png";
import {
  FaCloudUploadAlt,
  FaCode,
  FaDatabase,
  FaFolderOpen,
  FaLaptop,
  FaReact,
  FaServer,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
const Services = () => {
  return (
    <motion.div
      className="container-fluid min-h-screen max-h-auto md:ml-[2rem] px w-screen flex justify-center relative overflow-auto   items-center"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
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
      <div className="row flex justify-center dark:bg-transparent dark:bg-opacity-50  w-full h-full p-5 items-center ">
        <div className="col flex justify-center flex-col items-center w-full h-full">
          <p className="text-green-300 dark:text-green-900  text-sm md:text-[16px] lg:text-lg">
            What i will do for you
          </p>
          <h1 className="text-[36px] font-extrabold text-green-500 mb-10 lg:text-[42px]  uppercase md:text-[40px] md:text-3xl">
            My <span className="text-red-500">Services</span>
          </h1>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="services  flex flex-col justify-center items-center lg:flex-row gap-5 md:flex-row flex-wrap"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaLaptop className="text-[40px] text-green-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-green-700 dark:text-green-500">
                Web Development
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Providing end-to-end web development solutions using the MERN
                stack to create modern, responsive, and user-friendly websites
                and applications. I specialize in crafting seamless user
                experiences and robust functionalities to meet your business
                goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaShoppingCart className="text-[40px] text-pink-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-pink-700  dark:text-pink-500">
                Custom Web Applications
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Crafting tailor-made web applications for your specific needs.
                From building complex e-commerce platforms with secure payment
                gateways to creating engaging social media networks, I bring
                your unique ideas to life
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaCode className="text-[40px] text-blue-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-blue-700 dark:text-blue-500">
                API Development
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Developing robust and efficient APIs to power your applications.
                Whether it&apos;s designing RESTful APIs for traditional
                communication or implementing GraphQL for flexible data
                retrieval, I ensure smooth interactions between your front-end
                and back-end.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaDatabase className="text-[40px] text-yellow-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-yellow-700 dark:text-yellow-500">
                Database Management
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Managing data effectively through optimized database solutions.
                I excel in designing MongoDB databases, ensuring data integrity,
                and enhancing performance by optimizing queries and indexing.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaReact className="text-[40px] text-red-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-red-700 dark:text-red-500">
                Front-End Development
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Designing captivating user interfaces with React.js. I create
                interactive, pixel-perfect front-end designs that provide
                seamless user interactions and engaging visual experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaServer className="text-[40px] text-purple-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-purple-700 dark:text-purple-500">
                Back-End Development
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Building the backbone of your applications using Node.js and
                Express.js. I handle server-side logic, API development, and
                data management to ensure a reliable and efficient back-end
                architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaCloudUploadAlt className="text-[40px] text-amber-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-amber-700 dark:text-amber-500">
                Deployment and Hosting
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Streamlining deployment processes for hassle-free hosting. With
                expertise in DevOps practices and CI/CD pipelines, I ensure your
                applications are deployed smoothly on platforms like AWS,
                Heroku, or Netlify.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaUsers className="text-[40px] text-cyan-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-cyan-700 dark:text-cyan-500">
                Collaboration and Communication
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Collaborating effectively to bring projects to life. I leverage
                version control systems like Git to facilitate seamless teamwork
                and open lines of communication to understand and meet project
                requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service  rounded-xl lg:px-7 lg:py-7 md:px-5 md:py-5 p-5 w-[95%] lg:w-[28%] md:w-[43%] h-auto  bg-green-300 bg-opacity-50 dark:bg-gray-900  min-h-[20rem]  justify-center flex lg:max-w-[20%] lg:min-w-[20%] flex-col items-center"
            >
              <FaFolderOpen className="text-[40px] text-indigo-500" />
              <h4 className="text-md md:text-xl text-center lg:text-xl font-bold my-5 text-indigo-700 dark:text-indigo-500">
                Case Studies and Projects
              </h4>
              <p className="text-sm text-green-900 dark:text-green-100 text-justify">
                Showcasing real-world projects that exemplify my skills. Explore
                my portfolio to see projects that demonstrate my ability to
                create dynamic and functional applications using the MERN stack.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
