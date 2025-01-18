import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-500 py-2.5 px-4 lg:px-6">
        <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            // className="flex items-center"
          >
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-12 mr-3"
            />
          </Link>
          <div className="flex items-center lg:order-2 text-sm space-x-3">
            <Link
              to="#"
              className="hover:bg-gray-500 rounded-lg focus:ring-4 focus:ring-gray-500 py-2.5 px-3 lg:px-5"
            >
              Log In
            </Link>
            <Link
              to="#"
              className="bg-orange-700 hover:bg-orange-800 text-white rounded-lg focus:ring-4 focus:ring-orange-300 py-2.5 px-3 lg:px-5"
            >
              Get Started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium md:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-700 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                      : " block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({isActive}) =>isActive ?
                  "text-orange-700 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0" :
                  " block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                    to="/contact"
                    className={({isActive})=>
                        isActive ?
                        "text-orange-700 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                        :"block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                    }
                >
                    contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="github"
                  className={({isActive})=>
                     
                      isActive ? "text-orange-700 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0":"block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
