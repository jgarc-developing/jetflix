import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { NavbarLogOut } from "../components/NavbarLogOut";

export const Register = () => {
  const [email, setEmail] = useState("");

  const getEmail = () => {
    const e = sessionStorage.getItem("email");
    if (!e) {
      return <Navigate to="/" />;
    }
    setEmail(JSON.parse(e));
  };
  useEffect(() => {
    getEmail();
  }, []);
  return (
    <>
      <NavbarLogOut />
      <div className="text-white mt-24">
        <h1>Register</h1>
        <p>{email}</p>
      </div>
    </>
  );
};
