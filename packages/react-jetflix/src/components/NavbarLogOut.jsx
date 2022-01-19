import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";

export const NavbarLogOut = () => {
  const { pathname } = useLocation();
  return (
    <Disclosure as="nav" className=" bg-transparent absolute top-0 w-full z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {pathname === "/login" ? (
                  <></>
                ) : (
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                )}
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link
                    to="/"
                    className="text-slate-100 no-underline text-5xl font-bold text-red-600"
                  >
                    Jetflix
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {pathname === "/login" ? (
                      <></>
                    ) : (
                      <Link to="/login">
                        <button className="bg-red-600 active:bg-red-600 h-full px-3 py-2 text-slate-200 rounded-md">
                          Iniciar Sesión
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {pathname === "/login" ? (
            <></>
          ) : (
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {pathname === "/login" ? (
                  <></>
                ) : (
                  <Link to="/login">
                    <button className="bg-red-600 active:bg-red-600 h-full px-3 py-2 text-slate-200 rounded-md">
                      Iniciar Sesión
                    </button>
                  </Link>
                )}
              </div>
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
};
