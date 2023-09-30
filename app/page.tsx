import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Service/Service";
import Experience from "@/components/Skill/Skill";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Md Ashraful Alam",
  description: "I'm a Mern stack Developer",
};
const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
