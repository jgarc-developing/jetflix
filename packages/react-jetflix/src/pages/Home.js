import React from "react";
import { ContentHome } from "../components/ContentHome";
import { Footer } from "../components/Footer";
// import { Navbar } from "../components/Navbar";
import { NavbarLogOut } from "../components/NavbarLogOut";
import { ParallaxHomeRegister } from "../components/ParallaxHomeRegister";
import { Plans } from "../components/Plans";

export const Home = () => {
  return (
    <>
      <NavbarLogOut />
      <ParallaxHomeRegister/>
      <Plans />
      <ContentHome/>
      <Footer/>
    </>
  );
};
