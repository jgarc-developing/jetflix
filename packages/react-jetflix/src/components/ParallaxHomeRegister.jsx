import React from "react";
import { Parallax } from "react-parallax";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Navigate } from "react-router-dom";

const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

export const ParallaxHomeRegister = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Ingrese su email")
      .email("Ingrese un email válido")
      .required("Email es requerido"),
  });

  const ToRegister = () => {
    console.log("Log of Register");
    return <Navigate to="/register" />;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.email);
      sessionStorage.setItem("email", JSON.stringify(values.email));
      ToRegister();
    },
  });
  return (
    <Parallax
      bgImage={
        "https://raw.githubusercontent.com/jgarc-developing/jetflix/develop/pages/img/banner1.png"
      }
      strength={600}
      className="mt-28 border-b-8 border-gray-500"
      blur={{ min: -1, max: 3 }}
    >
      <div className="px-3" style={{ height: "550px" }}>
        <div style={insideStyles} className="text-white text-center">
          <h1 className="text-6xl font-bold" data-aos="fade-up">
            Películas y series <br /> ilimitadas y mucho más.
          </h1>
          <p className="text-xl my-2">
            Ingresa tu email para crear una cuenta o reiniciar tu membresía de
            Jetflix.
          </p>
          <form
            className="mt-12"
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            <TextField
              type="email"
              className="text-black bg-white w-7/12 h-11 px-2 rounded outline-none"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <button type="submit" className="h-11 rounded bg-red-600 px-4">
              Comenzar
            </button>
          </form>
        </div>
      </div>
    </Parallax>
  );
};
