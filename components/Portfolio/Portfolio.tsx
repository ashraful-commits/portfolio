"use client";
import React, { useEffect, useState } from "react";
import portfoliobg from "../../public/herobg3.jpg";
import gallary1 from "../../public/movix.png";
import gallary2 from "../../public/media.png";
import gallary3 from "../../public/admin.png";
import gallary4 from "../../public/admin dashboard.png";
import gallary5 from "../../public/devashraf.png";
import gallary6 from "../../public/ecom.png";
import gallary7 from "../../public/social app.png";
import gallary8 from "../../public/client-management.jpg";
import gallary9 from "../../public/potfolio.png";

import Image from "next/image";
import { usePathname } from "next/navigation";

import aboutbg3 from "../../public/bgabout2.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { it } from "node:test";
const Portfolio = () => {
  const [selectedType, setSelectedType] = useState("all");

  const [isFixed, setIsfixed] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const handleFixed = () => {
    if (pathname == "/protfolio") {
      if (window.scrollY > 100) {
        setIsfixed(true);
      } else {
        setIsfixed(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleFixed);
    return () => removeEventListener("scroll", handleFixed);
  }, []);
  const Projects = [
    {
      id: 1,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary1,
      tools: ["React", "Redux toolkit", "React-lazy-loader", "Axios"],
      type: "ftp-server",
    },
    {
      id: 2,
      name: "MediaKites",
      live: "https://media-kits-app-clone.vercel.app/",
      github: "https://github.com/ashraful-commits/mediaKitsapp-clone.git",
      shortdis: "It's social media app.You can share your via with that!",
      preview: gallary2,
      tools: ["React", "Redux toolkit", "Firebase"],
      type: "social",
    },
    {
      id: 3,
      name: "Admin Dashboard",
      live: "https://admin-dashboard-seven-kappa.vercel.app/",
      github: "https://github.com/ashraful-commits/admin-dashboard.git",
      shortdis: "It's an admin dashboard",
      preview: gallary3,
      tools: ["React", "Redux toolkit", "React query"],
      type: "e-commerce",
    },
    {
      id: 4,
      name: "Admin Dashboard",
      live: "https://wolmart-dashboard.vercel.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis: "It's an admin dashboard for E-commerce website",
      preview: gallary4,
      tools: ["React", "Redux toolkit"],
      type: "e-commerce",
    },
    {
      id: 5,
      name: "developer ashraful",
      live: "https://developerashraful.vercel.app/",
      github: "https://github.com/ashraful-commits/portfolio.git",
      shortdis: "This is protFolio",
      preview: gallary5,
      tools: ["NextJs", "Redux toolkit"],
      type: "portfolio",
    },
    {
      id: 5,
      name: "ashraful galaxy",
      live: "https://ashraful-galaxy.vercel.app/",
      github: "https://github.com/ashraful-commits/galaxy-portfolio.git",
      shortdis: "This is protFolio",
      preview: gallary9,
      tools: ["NextJs", "emailjs"],
      type: "portfolio",
    },
    {
      id: 6,
      name: "E-Commerce",
      live: "https://e-comwebapp.vercel.app/",
      github: "https://github.com/ashraful-commits/e-commerce-web.git",
      shortdis: "It's E-commerce App",
      preview: gallary6,
      tools: ["React", "Redux toolkit"],
      type: "e-commerce",
    },
    {
      id: 6,
      name: "client management",
      live: "https://management-clients.vercel.app/",
      github: "https://github.com/ashraful-commits/management-3.git",
      shortdis: "It's E-commerce App",
      preview: gallary8,
      tools: ["Next", "Express"],
      type: "Dashboard",
    },
  ];
  return (
    <motion.div
      className="container-fluid overflow-auto h-auto w-screen flex justify-center relative items-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-bg absolute  w-full h-full top-0  left-0 z-[-1]">
        <Image
          src={portfoliobg}
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
      <div className="row flex justify-center bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-[80%] w-full h-full p-5 items-center ">
        <div className="col  lg:w-[70vw] md:w-[80vw] h-full flex items-center justify-center flex-col">
          <motion.h1
            className="text-3xl uppercase font-extrabold text-yellow-500 mt-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            All <span className="text-red-500">Projects</span>
          </motion.h1>
          <motion.div
            className={`menu w-full py-2  flex justify-center z-20 items-center ${
              isFixed
                ? "top-0 fixed bg-white dark:bg-gray-900 mt-0 px-2"
                : "mt-10"
            }`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <ul className="flex gap-2 flex-wrap justify-center">
              <li>
                <button
                  onClick={() => setSelectedType("all")}
                  className=" bg-gray-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white text-gray-100 px-2 py-1"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedType("portfolio")}
                  className=" bg-green-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white text-gray-100 px-2 py-1"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedType("Dashboard")}
                  className=" bg-pink-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white text-gray-100 px-2 py-1"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedType("e-commerce")}
                  className=" bg-pink-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white text-gray-100 px-2 py-1"
                >
                  E-Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedType("social")}
                  className=" bg-purple-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white text-gray-100 px-2 py-1"
                >
                  Social
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedType("ftp-server")}
                  className=" bg-blue-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white text-gray-100 px-2 py-1"
                >
                  FTP Server
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSelectedType("education")}
                  className=" bg-sky-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white text-gray-100 px-2 py-1"
                >
                  Education
                </button>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="projects flex justify-center gap-5 flex-wrap items-center mt-10 border-t-2 pt-5 overflow-auto no-scrollbar min-w-[100%] md:overflow-hidden lg:overflow-hidden border-t-yellow-500"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[...Projects].map((item, index) => {
              if (selectedType === "all" || item.type === selectedType) {
                return (
                  <motion.div
                    key={index}
                    className="project shrink-0 w-[100%] min-w-[30%] z-[10] lg:w-[23%] md:w-[30%] group h-[25rem] relative lg:h-[20rem]  overflow-hidden"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    layout
                  >
                    <div className=" p-1 dark:bg-gray-200 bg-gray-100 w-full h-full">
                      <div className=" overflow-hidden w-full h-full flex items-start">
                        <Image
                          className="w-full h-full object-cover"
                          src={item.preview}
                          alt="project"
                        />
                      </div>
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-100 delay-75 top-0 left-0 p-2 overflow-hidden bg-yellow-500 w-full flex flex-col items-center justify-center h-full ">
                        <h1 className="text-red-500 text-xl font-bold">
                          {item.name}
                        </h1>
                        <p className=" text-sm text-gray-900  my-2 text-center ">
                          {item.shortdis}
                        </p>
                        <div className="flex  justify-center gap-2 flex-wrap">
                          {item.tools.map((item, index) => {
                            return (
                              <button
                                className=" text-gray-500 text-xs bg-yellow-400 px-2 pxy-1"
                                key={index}
                              >
                                {item}
                              </button>
                            );
                          })}
                        </div>

                        <div className="button flex gap-2 mt-5">
                          <Link
                            target="blank"
                            href={`${item.live}`}
                            className="bg-white text-yellow-900 px-2 flex gap-2 justify-center items-center py-1"
                          >
                            <FaExternalLinkAlt /> Live
                          </Link>
                          <Link
                            target="blank"
                            href={`${item.github}`}
                            className="bg-white text-yellow-900 px-2 flex gap-2 justify-center items-center py-1"
                          >
                            <FaGithub />
                            Github
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
              return null;
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
