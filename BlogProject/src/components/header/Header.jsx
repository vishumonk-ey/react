import React from "react";
import { LogoutBtn, Logo } from "../index";
import { Container } from "../container/Container";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Buttons from "../Buttons";
export default function Header() {
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate();
  let navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/allposts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/addposts",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <ul className="flex items-center ml-auto">
                {navItem.map(
                (eachItem) => (
                    eachItem.active && (
                    <li key={eachItem.name}>
                        <Buttons
                        onClick={() => {
                            navigate(eachItem.slug);
                        }}
                        children={eachItem.name}
                        />
                    </li>
                    )
                ))}
                {
                    authStatus && (
                        <li>
                            < LogoutBtn />
                        </li>
                    )
                }
          </ul>
        </nav>
      </Container>
    </header>
  );
}
