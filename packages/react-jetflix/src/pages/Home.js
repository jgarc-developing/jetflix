import React from "react";
<<<<<<< HEAD
import { CardMonthNews } from "../components/CardMonthNews";
import { Navbar } from "../components/Navbar";
=======
import { ContentHome } from "../components/ContentHome";
import { Footer } from "../components/Footer";
// import { Navbar } from "../components/Navbar";
>>>>>>> 6a77a9112950c80a7e93d67c9dbb99ea802487ec
import { NavbarLogOut } from "../components/NavbarLogOut";
import { ParallaxHomeRegister } from "../components/ParallaxHomeRegister";
import { Plans } from "../components/Plans";

export const Home = () => {
  return (
    <>
      <NavbarLogOut />
      <ParallaxHomeRegister/>
      <Plans />
<<<<<<< HEAD
      <br/><br/>
      <CardMonthNews/>
=======
      <ContentHome/>
      <Footer/>
>>>>>>> 6a77a9112950c80a7e93d67c9dbb99ea802487ec
    </>
  );
};
