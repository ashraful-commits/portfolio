import React from "react";
import portfoliobg from "../../public/herobg3.jpg";
import gallary1 from "../../public/gallery1.jpg";
import gallary2 from "../../public/gallary2.jpg";
import gallary3 from "../../public/gallery3.jpg";
import gallary4 from "../../public/gallary4.jpg";
import gallary5 from "../../public/gallery5.jpg";
import gallary6 from "../../public/gallery6.jpg";
import gallary7 from "../../public/gallary7.jpg";
import gallary8 from "../../public/gallary8.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const Portfolio = () => {
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
      type: "ftp-serv",
    },
    {
      id: 2,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary2,
      tools: ["React", "Redux toolkit"],
      type: "e-commerce",
    },
    {
      id: 3,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary3,
      tools: ["React", "Redux toolkit"],
      type: "social",
    },
    {
      id: 4,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary4,
      tools: ["React", "Redux toolkit"],
      type: "education",
    },
    {
      id: 5,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary5,
      tools: ["React", "Redux toolkit"],
      type: "portfolio",
    },
    {
      id: 6,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary6,
      tools: ["React", "Redux toolkit"],
      type: "e-commerce",
    },
    {
      id: 7,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary7,
      tools: ["React", "Redux toolkit"],
      type: "social",
    },
    {
      id: 8,
      name: "Movix",
      live: "https://movixproject01.netlify.app/",
      github: "https://github.com/ashraful-commits/movix",
      shortdis:
        "It is a ftp server realted project.It's made with tmdb api. Here you can watch Movie Trailer",
      preview: gallary8,
      tools: ["React", "Redux toolkit"],
      type: "education",
    },
  ];
  return (
    <div className="container-fluid  h-screen w-screen flex justify-center relative items-center">
      <div className="about-bg absolute  w-full h-full top-0 left-0 z-[-1]">
        <Image
          src={portfoliobg}
          className="w-full z-[-1]   h-full object-cover"
          alt="about-bg"
        />
      </div>
      <div className="row flex justify-center bg-white bg-opacity-[80%] w-full h-full p-5 items-center ">
        <div className="col  lg:w-[70vw] md:w-[80vw] h-full flex items-center justify-center flex-col">
          <h1 className="text-3xl font-extrabold text-yellow-500 mt-2">
            All Projects
          </h1>
          <div className="menu mt-10 flex justify-center items-center">
            <ul className="flex gap-5 flex-wrap justify-center">
              <li>
                <button className=" bg-green-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white px-2 py-1">
                  <Link className="text-white group-hover:text-white" href="/">
                    Portfolio
                  </Link>
                </button>
              </li>
              <li>
                <button className=" bg-pink-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white px-2 py-1">
                  <Link className="text-white group-hover:text-white" href="/">
                    E-Commerce
                  </Link>
                </button>
              </li>
              <li>
                <button className=" bg-purple-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white px-2 py-1">
                  <Link className="text-white group-hover:text-white" href="/">
                    Social
                  </Link>
                </button>
              </li>
              <li>
                <button className=" bg-blue-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white px-2 py-1">
                  <Link className="text-white group-hover:text-white" href="/">
                    FTP Server
                  </Link>
                </button>
              </li>
              <li>
                <button className=" bg-sky-500 group hover:bg-yellow-500 transition-all duration-100 font-bold hover:text-white px-2 py-1">
                  <Link className="text-white group-hover:text-white" href="/">
                    Education
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          <div className="projects flex justify-center gap-5 flex-wrap items-center mt-10 border-t-2 pt-5 overflow-auto no-scrollbar md:overflow-hidden lg:overflow-hidden border-t-yellow-500">
            {Projects.map((item, index) => {
              return (
                <div
                  key={index}
                  className="project w-[100%]  lg:w-[23%] md:w-[30%] group h-[25rem] relative lg:h-[20rem]  overflow-hidden"
                >
                  <div className=" p-1 bg-orange-200 w-full h-full">
                    <div className=" overflow-hidden w-full h-full">
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
                        <button className="bg-white text-yellow-900 px-2 flex gap-2 justify-center items-center py-1">
                          <FaExternalLinkAlt /> Live
                        </button>
                        <button className="bg-white text-yellow-900 px-2 flex gap-2 justify-center items-center py-1">
                          <FaGithub />
                          Github
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
