import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../index";
import { Logo } from "../index";
import Container from "../container/Container";
import { Logout } from "../index";
function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navItems = [
    {
      name: "Home",
      status: true,
      slug: "/",
    },
    {
      name: "Login",
      status: !isLoggedIn,
      slug: "/login",
    },
    {
      name: "SignUp",
      status: !isLoggedIn,
      slug: "/signup",
    },
    {
      name: "All Posts",
      status: isLoggedIn,
      slug: "/all-posts",
    },
    {
      name: "Add Posts",
      status: isLoggedIn,
      slug: "/add-posts",
    },
    // {
    //   name : "Logout",
    //   status : isLoggedIn,
    //   slug : "/logout"
    // },
    {
      name: "Profile",
      status: isLoggedIn,
      slug: "/profile",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const handleLogOut = () => {}
  return (
    <header className="py-3 sticky top-0 z-100 shadow bg-gray-500/50 px-12 transition-all ease-in-out duration-700 ">
      <nav className="flex items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center">
            <Logo />
            <p className="font-bold text-xl font-mono ml-2">KuchBhiBolo</p>
          </Link>
        </div>
        {/* Nav Items */}
        <ul className=" hidden items-center ml-auto space-x-2 md:flex">
          {navItems.map((eachNavItem) =>
            eachNavItem.status ? (
              <li key={eachNavItem.slug}>
                <NavLink
                  to={eachNavItem.slug}
                  className={({ isActive }) => (isActive ? "" : " ")}
                >
                  <Button>{eachNavItem.name}</Button>
                </NavLink>
              </li>
            ) : null
          )}
          {!isLoggedIn ? null : (
            <li className="ml-10">
              <Logout />
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span
              className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-black transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2 " : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>
      {isMenuOpen ? <ul className="flex flex-col justify-around space-y-1.5 transition ease-in-out duration-700 ">
        {navItems.map((eachNavItem)=>(
          eachNavItem.status ? (
            <li key={eachNavItem.slug} className="mx-auto">
              <NavLink to={eachNavItem.slug}>
                <Button>{eachNavItem.name}</Button>
              </NavLink>
            </li>
          ) : null
        ))}
      </ul> : ""}
    </header>
  );
}

export default Header;
