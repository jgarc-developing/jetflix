import React from "react";
import { Parallax } from "react-parallax";
import { Formik } from "formik";
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
            Disfruta donde quieras. Cancela cuando quieras.
          </p>
          <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "El email es obligatorio";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Ingresa un email válido.";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              sessionStorage.setItem("email", JSON.stringify(values.email));
              <Navigate to="/register" />;
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting = true,
              /* and other goodies */
            }) => (
              <>
                <form onSubmit={handleSubmit} className="mt-12">
                  <input
                    type="email"
                    name="email"
                    className="text-black  w-7/12 h-10 px-2 outline-none"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 bg-red-600 px-4"
                  >
                    Comenzar
                  </button>
                </form>
                <p className="mb-5 text-amber-600 text-sm">
                  {errors.email && touched.email && errors.email}
                </p>
              </>
            )}
          </Formik>
        </div>
      </div>
    </Parallax>
  );
};
