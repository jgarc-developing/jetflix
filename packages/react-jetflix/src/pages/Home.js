import React from "react";
import { Navbar } from "../components/Navbar";
import { NavbarLogOut } from "../components/NavbarLogOut";
import { Plans } from "../components/Plans";

export const Home = () => {
  return (
    <>
      <NavbarLogOut />
      <Plans />
    </>
  );
};
