import React from "react";
import { CardMonthNews } from "../components/CardMonthNews";
import { Navbar } from "../components/Navbar";
import { NavbarLogOut } from "../components/NavbarLogOut";
import { Plans } from "../components/Plans";

export const Home = () => {
  return (
    <>
      <NavbarLogOut />
      <Plans />
      <br/><br/>
      <CardMonthNews/>
    </>
  );
};
