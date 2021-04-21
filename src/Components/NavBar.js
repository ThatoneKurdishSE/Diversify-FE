import React from "react";

export default function Navbar({ }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div>
            <a
              className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
              href="/"
            >
              Diversify
            </a>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                <span className="ml-2">Logout</span>
                </a>
              </li>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                    href="login"
                  >
                    <span className="ml-2">Login</span>
                  </a>
                </li>
                <li className="sign-up">
                  <a
                    className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                    href="sign-up"
                  >
                    <span className="ml-2">Signup</span>
                  </a>
                </li>
              </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
