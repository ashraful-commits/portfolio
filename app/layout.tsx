import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

import ThemProvider from "./ThemeProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import fav from "/public/me.ico";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Ashraful Alam",
  description: "This my portfolio App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`{$inter.className } flex`}>
        <div className="container-fluid  flex darK:bg-red-500  justify-center w-screen h-auto items-center">
          <div className="row flex justify-center items-center w-full h-full ">
            <div className="col flex justify-between items-center  w-full h-full">
              <ThemProvider>
                <Header />
                {children}
              </ThemProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
