import Home from "@/components/Home/Home";
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
    </div>
  );
};

export default page;
