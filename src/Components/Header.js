import React from "react";
import SearchBar from "material-ui-search-bar";

export default function Header( status ) {

const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
      <div class="flex items-center flex-no-shrink mr-6">
        <span class="font-semibold text-xl tracking-tight">Diversify</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            class="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <SearchBar
            // value={this.state.value}
            // onChange={(newValue) => this.setState({ value: newValue })}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
          />
        </div>
        <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            {status ? (
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
            ) : (
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
            )}
          </div>
        {/* <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div> */}
      </div>
    </nav>
  );
}
