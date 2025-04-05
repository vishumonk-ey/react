import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import {Button} from "../index"
import {Logo} from "../index"
import Container from "../container/Container";
import {Logout} from '../index'
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
      name : "All Posts",
      status : isLoggedIn,
      slug : "/all-posts"
    },
    {
      name : "Add Posts",
      status : isLoggedIn,
      slug : "/add-posts"
    },
    // {
    //   name : "Logout",
    //   status : isLoggedIn,
    //   slug : "/logout"
    // },
    {
      name : "Profile",
      status : isLoggedIn,
      slug : "/profile"
    }
  ];
  // const handleLogOut = () => {}
  return (
    <header className="py-5 shadow bg-gray-500/50 px-12">
      
        <nav className="flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to = "/">
                <Logo/>
            </Link>
            <p className="font-bold text-xl ml-2 font-mono">
              KuchBhiBolo
            </p>
          </div>
          {/* Nav Items */}
          <ul className="flex items-center ml-auto space-x-2">
            {
              navItems.map((
                eachNavItem
              )=>(
                eachNavItem.status ?
                (<li key={eachNavItem.slug}>
                  <NavLink to={eachNavItem.slug} className={({isActive})=>(
                    isActive ? "":" "
                  )}>
                      <Button>
                          {eachNavItem.name}
                      </Button>
                  </NavLink>
                </li>) : (null)
              ))
            }
            {!isLoggedIn ? (null) : (<li className="ml-10"><Logout/></li>)}
          </ul>

          
        </nav>
      
    </header>
  );
}

export default Header;
