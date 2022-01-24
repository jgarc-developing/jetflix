import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { NavbarLogOut } from "../components/NavbarLogOut";

import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";

export const Register = () => {
  const [email, setEmail] = useState("");
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const getEmail = () => {
    const e = sessionStorage.getItem("email");
    if (!e) {
      return <Navigate to="/" />;
    }
    setEmail(JSON.parse(e));
    document.title = "Jetflix | Registro";
  };
  useEffect(() => {
    getEmail();
  }, []);
  return (
    <div className="h-screen bg-slate-50 relative">
      <NavbarLogOut />
      <div
        className="mt-36 absolute left-0 right-0 mx-auto"
        style={{ maxWidth: "350px" }}
      >
        <strong>PASO 1 DE 3</strong>
        <h3>
          ¡Hola de nuevo! <br /> Suscribirte a Jetflix es fácil.
        </h3>
        <p>Ingresa tu contraseña para comenzar a ver al instante.</p>
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="text-yellow-50 mt-8"
        >
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            disabled
            value={email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <button
            type="submit"
            className=" w-full bg-red-600 p-3 font-medium mt-12"
          >
            Siguiente
          </button>
        </form>
      </div>
    </div>
  );
};
