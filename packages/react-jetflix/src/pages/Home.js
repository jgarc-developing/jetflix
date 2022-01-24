import React from "react";
import { CardMonthNews } from "../components/CardMonthNews";
// import { Navbar } from "../components/Navbar";
import { ContentHome } from "../components/ContentHome";
import { Footer } from "../components/Footer";
import { NavbarLogOut } from "../components/NavbarLogOut";
import { ParallaxHomeRegister } from "../components/ParallaxHomeRegister";
import { Plans } from "../components/Plans";

export const Home = () => {
  return (
    <>
      <NavbarLogOut />
      <ParallaxHomeRegister/>
      <Plans />
      <CardMonthNews/>
      <ContentHome/>
      <Footer/>
    </>
  );
};
