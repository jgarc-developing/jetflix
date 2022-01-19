import React from "react";
import { NavbarLogOut } from "../components/NavbarLogOut";
import { Formik } from "formik";

export const Login = () => {
  return (
    <div className="relative h-screen">
      <NavbarLogOut />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9737377e-a430-4d13-ad6c-874c54837c49/83addbb8-ba8a-49c7-8dff-aecd54b66669/PE-es-20220111-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        className=" absolute top-0 w-screen opacity-50 h-screen"
        alt="bg login"
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email && !values.password) {
            errors.email = "Ingresa un email o un número de teléfono válido.";
            errors.password =
              "La contraseña debe tener entre 4 y 60 caracteres.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) &&
            (values.password.length >= 4 || values.password.length <= 60)
          ) {
            errors.email = "Ingresa un email o un número de teléfono válido.";
            errors.password =
              "La contraseña debe tener entre 4 y 60 caracteres.";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
          <form
            onSubmit={handleSubmit}
            className="absolute text-yellow-50 mt-48 p-8 mx-auto left-0 right-0"
            style={{ width: "350px", backgroundColor: "rgba(0,0,0,.75)" }}
          >
            <h1 className="mb-4 text-4xl font-medium">Inicia Sesión</h1>
            <input
              type="email"
              name="email"
              className="w-full rounded-md outline-none p-3 text-white bg-black opacity-75"
              placeholder="Email o número de teléfono"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <p className="mb-5 pl-3 text-amber-600 text-xs">
              {errors.email && touched.email && errors.email}
            </p>
            <input
              type="password"
              name="password"
              className=" w-full rounded-md outline-none p-3 text-white bg-black opacity-75"
              placeholder="Contraseña"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <p className="pl-3 text-amber-600 text-xs">
              {errors.password && touched.password && errors.password}
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className=" w-full bg-red-600 p-3 font-medium rounded-md mt-12"
            >
              Iniciar sesión
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
