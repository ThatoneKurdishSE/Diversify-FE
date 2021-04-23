/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar({community}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className="
          bg-gray-700
          relative
          flex
          flex-wrap
          items-center
          justify-between
          px-2
          py-3
        ">
        <div 
          className="
            container
            px-4
            mx-auto
            flex
            flex-wrap
            items-center
            justify-between
          ">
          <div>
            <a
              className="
                text-md
                font-bold
                leading-relaxed
                inline-block
                mr-4
                py-2
                whitespace-nowrap
                text-white
              "
              href="#"
            >
              {community === null ? `Diversify` : `${community.name} ( ${community.location} )`}
            </a>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
              className="
                flex
                flex-col
                lg:flex-row
                list-none
                lg:ml-auto
              ">
              <li className="nav-item">
                <a
                  className="
                    px-3
                    py-2
                    flex
                    items-center
                    text-xs
                    font-bold
                    leading-snug
                    hover:opacity-75
                    text-white
                  "
                  href="#"
                >
                  <span className="ml-2">
                    View All Members(Modal)
                  </span>
                </a>
              </li>
            </ul>
            <ul
              className="
                flex
                flex-col
                lg:flex-row
                list-none
                lg:ml-auto
              ">
              <li className="nav-item">
                <a
                  className="
                    px-3
                    py-2
                    flex
                    items-center
                    text-xs
                    font-bold
                    leading-snug
                    hover:opacity-75
                    text-white
                  "
                  href="#"
                >
                  <span className="ml-2">
                    Join/Leave
                  </span>
                </a>
              </li>
              <li className="sign-up">
                <a
                  className="
                    px-3
                    py-2
                    flex
                    items-center
                    text-xs
                    font-bold
                    leading-snug
                    hover:opacity-75
                    text-white
                  "
                  href="#"
                >
                  <span className="ml-2">
                    Details
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
